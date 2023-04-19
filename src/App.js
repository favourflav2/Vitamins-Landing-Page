import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
