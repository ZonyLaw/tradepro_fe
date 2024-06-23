// import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import TickerScreen from './screens/TickerScreen';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-5">
          <Container>
            <Routes>
              <Route path="/market" element={<TickerScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
