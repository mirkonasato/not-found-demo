import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>The Header</header>
        {children}
      </body>
    </html>
  );
}
