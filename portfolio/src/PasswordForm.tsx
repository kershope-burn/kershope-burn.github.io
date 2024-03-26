import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';

type PasswordFormProps = {
    onSubmit: (password: string) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="# password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="portfolio-title"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="portfolio-title">
          Unlock
        </Button>
      </Form>
    </>
  );
}

export default PasswordForm;