import './sass/style.scss';
import MainBanner from './layout/MainBanner';
import Nav from './layout/Nav';
import Leader from './layout/Leader';
import Creations from './layout/Creations';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <MainBanner />
        <Leader />
        <Creations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
