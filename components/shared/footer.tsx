import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container py-6 text-center text-sm text-foreground/60">
        <p>&copy; {currentYear} Sushant Subedi. Designed and built with ❤️.</p>
      </div>
    </footer>
  );
}
