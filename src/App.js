import './App.css';
import FaxApp from './components/FaxApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fax-sender-form" element={<FaxApp />} />
      </Routes>
    </Router>
  );
}

export default App;