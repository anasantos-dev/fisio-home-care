

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';
import { SobreMim } from './pages/SobreMim';


function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="sobre">
          <SobreMim />
        </section>
        {/* Outras seções como Tratamentos, Portfólio, Contato podem ser adicionadas aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
