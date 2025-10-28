'use client';

import { useState } from 'react';

export default function Home() {
  const [decision, setDecision] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setResult(null);
    try {
      const res = await fetch('/api/persona', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ decision })
});

// Try to parse JSON safely
let data: any = null;
try {
  data = await res.json();
} catch (e) {
  throw new Error('Server did not return valid JSON');
}

if (!res.ok) {
  throw new Error(data?.error || `Server error (${res.status})`);
}

setResult(data.result);
    } catch (e: any) {
      setErr(e.message || 'Something went wrong');
    }
  }

  return (
    <>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1 }}>
        Codex Persona • Powered by HydraCore
      </h1>
      <p>Enter a real decision. Persona simulates outcomes and returns a clear brief you can act on today.</p>

      <form onSubmit={run} style={{ marginTop: '1rem' }}>
        <label>Describe your decision:</label>
        <br />
        <textarea
          value={decision}
          onChange={e => setDecision(e.target.value)}
          rows={6}
          style={{ width: '100%', marginTop: 8 }}
          placeholder="e.g., Should I take the night shift cabling job for 3 months?"
        />
        <br />
        <button type="submit" style={{ marginTop: 8 }}>Run Simulation</button>
      </form>

      {result && <p style={{ marginTop: 16 }}><strong>Result:</strong> {result}</p>}
      {err && <p style={{ marginTop: 16, color: 'crimson' }}><strong>Error:</strong> {err}</p>}

      <p style={{ marginTop: 24, opacity: 0.7 }}>
        API health check: <a href="/api/persona" target="_blank">/api/persona</a>
      </p>
    </>
  );
}
