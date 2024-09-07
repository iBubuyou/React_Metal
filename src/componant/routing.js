import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import DB from './main/database'

export default function Routing() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/db" element={<DB />} />
        </Routes>
      </Router>
    );
  }