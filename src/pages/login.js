import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

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
    <div>
      <Input type="username" label="Nom d'utilisateur" placeholder="Entrez le nom d'utilisateur" value={username} onChange={value => setUsername(value.target.value)} />
      <Input type="password" label="Mot de passe" placeholder="Entrez le mot de passe" value={password} onChange={value => setPassword(value.target.value)} />
      <Button color="primary" onClick={login} />
    </div>
  );
};

export default Login;
