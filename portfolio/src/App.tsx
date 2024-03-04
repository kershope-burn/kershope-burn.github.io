import { useState } from 'react';
import PasswordForm from './PasswordForm';
import Home from './Home';
import bcrypt from 'bcryptjs';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const hashedPassword = "$2a$10$7DrCjAlzrc6B3DeiqDFx3unvOcHPi34BDnfp1k7frgfZm/FuZifim"

  const handlePasswordSubmit = (password: string) => {
    const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword)
    if (isPasswordCorrect) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password")
    }
  }

  return (
    <div>
      {authenticated ? (
        <Home />
      ) : (
        <div className="App-center" >
          <PasswordForm onSubmit={handlePasswordSubmit}/>
        </div>
      )}
    </div>
  );
}

export default App;
