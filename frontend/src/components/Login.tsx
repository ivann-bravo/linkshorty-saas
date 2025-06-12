import React, { useState } from 'react';
import api from '../services/api';
import { isAxiosError } from 'axios';

interface TokenResponse {
  access: string;
  refresh: string;
}

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await api.post<TokenResponse>('/token/', {
        username: username,
        password: password,
      });

      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      alert('¡Login exitoso!');

    } catch (err) {
      if (isAxiosError(err)) {
        setError('Error al iniciar sesión. Verifica tus credenciales.');
      } else {
        setError('Ocurrió un error inesperado.');
      }
      console.error("Error en el login:", err);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Mostramos el mensaje de error si existe */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;