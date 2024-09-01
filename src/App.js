// import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import TickerScreen from './screens/TickerScreen';
import PriceScreen from './screens/PriceScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-5">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/market" element={<TickerScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/prices/:id" element={<PriceScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
