import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bcrypt from 'bcryptjs';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { InitContext } from './utils/InitContext';
import About from './views/About';
import Navigation from './components/Navigation';
import options from './utils/particles';
import PasswordForm from './components/PasswordForm';
import { ProjectPage } from './views/ProjectPage';
import { digitalSecurityAndPrivacyData, gamingAndSocialMediaData, charityAndCommunityData, portfolioSiteData } from './utils/projectPages';
import Home from './views/Home';

import './styles/App.css';

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

  return (
    <>
      <InitContext.Provider value={{ init }}>
        {authenticated === true ? (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/digital-security-and-privacy" element={<ProjectPage projectData={digitalSecurityAndPrivacyData} />} />
                <Route path="/projects/gaming-and-social-media" element={<ProjectPage projectData={gamingAndSocialMediaData} />} />
                <Route path="/projects/charity-and-community" element={<ProjectPage projectData={charityAndCommunityData} />} />
                <Route path="/projects/portfolio-site" element={<ProjectPage projectData={portfolioSiteData} />} />
              </Routes>
            </>
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
