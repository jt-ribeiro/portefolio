'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Erro capturado:', error);
  }, [error]);

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, fontWeight: 'bold', color: '#0f172a' }}>Ops!</h1>
        <p style={{ marginTop: 8, color: '#475569' }}>Algo correu mal. Por favor tenta novamente.</p>
        <button
          onClick={reset}
          style={{
            marginTop: 20,
            padding: '10px 20px',
            background: '#0f172a',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.target.style.background = '#1e293b')}
          onMouseOut={(e) => (e.target.style.background = '#0f172a')}
        >
          Tentar outra vez
        </button>
      </div>
    </div>
  );
}