import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import bcrypt from 'bcryptjs';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { InitContext } from './InitContext';
import About from './About';
import Navigation from './Navigation';
import options from './particles';
import PasswordForm from './PasswordForm';
import { ProjectPage, ProjectData, InlineBadge } from './ProjectPage';
import Home from './Home';

import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const hashedPassword = "$2a$10$7DrCjAlzrc6B3DeiqDFx3unvOcHPi34BDnfp1k7frgfZm/FuZifim"

  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handlePasswordSubmit = (password: string) => {
    const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword)
    if (isPasswordCorrect) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    } else {
      setShowPasswordMessage(true);
    }
  }

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const digitalSecurityAndPrivacyData: ProjectData = {
    projectTitle: "projects/digital-security-and-privacy",
    projectDescription: [
      "Securing information assets and respecting the privacy of all interested parties are aspects of responsible technology. My understanding of how these concepts encroach on personal digital security and privacy - and why I should care about them - deepened by natural proximity when I worked for a cyber security startup.",
      "This project isn't \"done\" in that it is a lifelong attempt to maintain digital security and privacy as technology, my risk profile, and the law evolves. But this page details some of the bigger steps I've taken to protect my digital life.",
      "There are some more common steps taken by people who wish to protect their digital security and privacy. VPNs, MFA, password managers, ad-blocking browser extensions, and so on. This page is more concerned with steps that, unfortunately, require more technical nous to implement."
    ],
    projectGoals: [
      "Inform and educate myself on personal digital security and privacy and what is reasonably possible to improve these.",
      "Improve these aspects by exploring alternative service providers, operating systems, and network hardening.",
      "Balance security and privacy with convenience."
    ],
    projectSkills: [
      <ListGroup.Item>Familiarity with multiple <InlineBadge text="Linux" /> distributions, package managers, the command line, and different hardware running Linux.</ListGroup.Item>,
      <ListGroup.Item>The finesse to modify operating systems, drivers, and firmware without bricking devices.</ListGroup.Item>,
      <ListGroup.Item>Use of <InlineBadge text="Docker" /> to run multiple services in parallel. Simple back-up and restore with <InlineBadge text="Docker Compose" />.</ListGroup.Item>,
      <ListGroup.Item>Comfort with <InlineBadge text="open source software" /> and departing from the beaten track.</ListGroup.Item>,
      <ListGroup.Item>Experience with home <InlineBadge text="networking" /> that extends into <InlineBadge text="enterprise networking" />. Willingness to experiment and preparing routes to reverse adverse changes.</ListGroup.Item>,
      <ListGroup.Item>Understanding <InlineBadge text="information security" /> and <InlineBadge text="privacy" /> risks associated with every day activities and engagement with third-parties.</ListGroup.Item>
    ],
    projectOutcome: [
      "Well-known service providers that rely on extensive data collection have been replaced with trusted (sometimes paid) alternatives.",
      "Advertisements have been removed from day-to-day browsing in my home network on all devices and within all applications.",
      "The home network has been secured against opportunistic attacks.",
      "Requests to smart devices on the home network now stay within the home network through use of open source software.",
      "Extensive network hardening and use of open source router firmware proved a step too far in introducing significant inconvenience."
    ]
  };

  return (
    <>
      <InitContext.Provider value={{ init }}>
        {authenticated === true ? (
          <Router>
            <div>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/digital-security-and-privacy" element={<ProjectPage projectData={digitalSecurityAndPrivacyData} />} />
              </Routes>
            </div>
          </Router>
        ) : (
          <>
            {init && (
              <Particles
                id="tsparticles"
                options={options}
              />
            )}
            <div className="forest-background">
              {/* This keeps the password form centred on both axes */}
              <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row>
                  <Col>
                    <div style={{minHeight: '200px'}}> {/* This stops reflow when the Alert appears */}
                      <PasswordForm onSubmit={handlePasswordSubmit} />
                      <Alert variant="warning" show={showPasswordMessage} style={{ marginTop: '20px' }} className="portfolio-text">
                        Incorrect password
                      </Alert>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        )}
      </InitContext.Provider>
    </>
  );
}

export default App;
