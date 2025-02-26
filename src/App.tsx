import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componets/Header';
import Home from './Pages/Home';
import Footer from './componets/Footer';
import Api from './Pages/Api'
function App() {
  return (
    <>
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Api" element={<Api />} />
      </Routes>
      </Router>
      <Footer/>
      </>
  );
}

export default App;
