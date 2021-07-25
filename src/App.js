import './App.css';
import Header from './Containers/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTitles from './Components/AllTitles';
import Services from './Containers/Services';
import Portfolio from './Containers/Portfolio';
import Clients from './Containers/Clients';
import Testimonials from './Containers/Testimonials';
import Blog from './Containers/Blog';
import Contact from './Containers/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
