export const metadata = {
  title: 'Codex Persona • Powered by HydraCore'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ maxWidth: 720, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
