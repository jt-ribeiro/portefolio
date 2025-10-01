export default function Loading() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: '4px solid #cbd5e1',
            borderTop: '4px solid #0f172a',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <p style={{ marginTop: 12, fontSize: 14, color: '#475569' }}>A carregar…</p>
      </div>

      {/* CSS inline para evitar criar ficheiro extra */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}