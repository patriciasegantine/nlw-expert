import React from 'react'

export const Footer: React.FC = () => {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-muted py-4 md:border">
      
      <div className="container mx-auto text-center text-muted-foreground text-xs">
        <span>© {currentYear} All rights reserved</span>
        <span className="hidden md:inline">•</span>
        <span> Developed with ❤️ by <strong>Patricia Segantine</strong></span>
      </div>
    </footer>
  )
}
