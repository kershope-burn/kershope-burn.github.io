import { useState } from 'react';
import PasswordForm from './PasswordForm';
import Home from './Home';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bcrypt from 'bcryptjs';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const hashedPassword = "$2a$10$7DrCjAlzrc6B3DeiqDFx3unvOcHPi34BDnfp1k7frgfZm/FuZifim"

  const toggleShowPasswordMessage = () => setShowPasswordMessage(!showPasswordMessage)

  const handlePasswordSubmit = (password: string) => {
    const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword)
    if (isPasswordCorrect) {
      setAuthenticated(true);
    } else {
      setShowPasswordMessage(true);
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          {authenticated ? (
            <Home />
          ) : (
            <>
              <PasswordForm onSubmit={handlePasswordSubmit} />
              <Alert variant='warning' show={showPasswordMessage} style={{ marginTop: '20px' }}>
                Incorrect password
              </Alert>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default App;
