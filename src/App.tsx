import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
