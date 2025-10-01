import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 96, fontWeight: 800, color: '#0f172a' }}>404</h1>
        <p style={{ fontSize: 18, color: '#475569' }}>Página não encontrada.</p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: 24,
            padding: '10px 20px',
            background: '#0f172a',
            color: '#fff',
            borderRadius: 6,
            textDecoration: 'none',
          }}
          onMouseOver={(e) => (e.target.style.background = '#1e293b')}
          onMouseOut={(e) => (e.target.style.background = '#0f172a')}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}