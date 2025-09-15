import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';
import { SobreMim } from './pages/SobreMim';
import { Tratamentos } from './pages/Tratamentos'; 
import { Avaliacoes } from './pages/Avaliacoes';
import { InformacoesUteis } from './pages/InformacoesUteis';


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

        <section id="tratamentos">   
          <Tratamentos />
        </section>

         <section id="avaliacoes">  
          <Avaliacoes />
        </section>

        <section id="informacoes">
          <InformacoesUteis />
        </section>

        {/* Depois você pode adicionar também depoimentos e contato aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
