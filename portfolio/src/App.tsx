import { useEffect, useState } from 'react';
import About from './About';
import Navigation from './Navigation';
import PasswordForm from './PasswordForm';
import Home from './Home';
import { InitContext } from './InitContext';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const hashedPassword = "$2a$10$7DrCjAlzrc6B3DeiqDFx3unvOcHPi34BDnfp1k7frgfZm/FuZifim"

  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth) {
      setAuthenticated(true);
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
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <InitContext.Provider value={{ init }}>
        {authenticated ? (
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
          // This keeps the password form centred on both axes
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
        )}
      </InitContext.Provider>
    </>
  );
}

export default App;
