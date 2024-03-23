import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bcrypt from 'bcryptjs';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { InitContext } from './InitContext';
import About from './About';
import Navigation from './Navigation';
import options from './particles';
import PasswordForm from './PasswordForm';
import Home from './Home';

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
          <Router>
            <div>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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
                      <Alert variant='warning' show={showPasswordMessage} style={{ marginTop: '20px' }}>
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
