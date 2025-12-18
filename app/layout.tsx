export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Sushant Portfolio</title>
        <meta name="description" content="Portfolio of Sushant — software developer" />
      </head>
      <body>{children}</body>
    </html>
  );
}
