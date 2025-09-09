import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Inicio } from './pages/Inicio'

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <Inicio />
      </main>
      <Footer />
    </div>
  )
}

export default App
