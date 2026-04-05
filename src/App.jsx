import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ThreeArmiesPanel from './components/ThreeArmiesPanel.jsx'
import PersonalNarrative from './components/PersonalNarrative.jsx'
import ScrollyTelling from './components/ScrollyTelling.jsx'
import Dashboard from './components/Dashboard.jsx'
import PropagandaSection from './components/PropagandaSection.jsx'
import WhatDataTellsUs from './components/WhatDataTellsUs.jsx'
import FutureResearch from './components/FutureResearch.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface">
      <Navbar />
      <main>
        <Hero />
        <ThreeArmiesPanel />
        <PersonalNarrative />
        <ScrollyTelling />
        <Dashboard />
        <PropagandaSection />
        <WhatDataTellsUs />
        <FutureResearch />
      </main>
      <Footer />
    </div>
  )
}
