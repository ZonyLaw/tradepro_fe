// import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import TickerScreen from './screens/TickerScreen';
import PriceScreen from './screens/PriceScreen';
import ModelReportScreen from './screens/ModelReportScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TradersMindsetScreen from './screens/TradersMindsetScreen';
import TradersNotesScreen from './screens/TradersNotesScreen';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main >
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/market" element={<TickerScreen />} />
              <Route path="/prices/:id" element={<PriceScreen />} />
              <Route path="/report" element={<ModelReportScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/tradersmindset" element={<TradersMindsetScreen />} />
              <Route path="/tradersnotes" element={<TradersNotesScreen/>} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
