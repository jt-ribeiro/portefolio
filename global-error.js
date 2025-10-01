// app/global-error.jsx
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="pt">
      <head>
        <title>Erro crítico</title>
      </head>
      <body
        style={{
          margin: 0,
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          background: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, fontWeight: 'bold', color: '#0f172a' }}>
            Erro crítico
          </h1>
          <p style={{ marginTop: 8, color: '#475569' }}>
            A aplicação falhou ao carregar.
          </p>
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
            Tentar recuperar
          </button>
        </div>
      </body>
    </html>
  );
}