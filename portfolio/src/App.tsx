import React, { useState } from 'react';
import PasswordForm from './PasswordForm';
import logo from './logo.svg';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    if (password === "RjLNr**R%BDb3sfG45ZU") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password")
    }
  }

  return (
    <div>
      {authenticated ? (
        <div>
          <h1>Welcome to My Portfolio</h1>
        </div>
      ) : (
        <PasswordForm onSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
}

export default App;
