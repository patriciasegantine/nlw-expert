import React from 'react'
import { ThemeProvider } from "@/context/ThemeProviderContext.tsx";
import { Layout } from "@/components/Layout.tsx";

export const App: React.FC = () => {
  
  return (
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
  )
}
