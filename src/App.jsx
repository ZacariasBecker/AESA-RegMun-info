import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <div className="NavHome">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
