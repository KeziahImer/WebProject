// Login.jsx

import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/router';
import styles from './login.module.css'; // Importe le fichier CSS module

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.jwt);
        router.push('/')
      } else {
        alert("Mauvaises informations d'identification. Veuillez réessayer.");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className={styles.container}>
        <div className={styles.inputcontainer}>
          <label>Nom d utilisateur</label>
          <Input type="username" placeholder="Entrez le nom d'utilisateur" value={username} onChange={value => setUsername(value.target.value)} />
        </div>
        <div className={styles.inputcontainer}>
          <label>Mot de passe</label>
          <Input type="password" placeholder="Entrez le mot de passe" value={password} onChange={value => setPassword(value.target.value)} />
        </div>
        <div className={styles.buttoncontainer}>
          <Button color="primary" onClick={login}>Connexion</Button>
        </div>
      </div>
  );
};

export default Login;
