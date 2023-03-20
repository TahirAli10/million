import logo from './logo.svg';
import './App.css';
import Header from './components/LandingPage/header';
import Footer from './components/LandingPage/footer';
import NotFound from './components/LandingPage/notFound';
import Home from './components/LandingPage/Home';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <>
    <Header />
    <Routes >
    <Route path='/notFound' element={<NotFound />} />
    <Route path='/' element={<Home />} />
    </Routes>
 

    <Footer />
    </>
  );
}

export default App;
