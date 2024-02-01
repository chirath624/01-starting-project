import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app2!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
