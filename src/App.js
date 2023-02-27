import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './pages/Header/Header/Header';
import { MainPage } from './pages/MainPage/MainPage'
import { Footer } from './pages/Footer/Footer';

import { About } from './pages/About/About';


function App() {

  return (
    <>
      <Router basename="/">
        <Header />
        {/* <Routes> */}
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contacts" element={<Contact />} />
                        <Route path="/category/:name" element={<Category />} />
                        <Route path="/meal/:id" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> */}
        <MainPage />
        <Footer />
      </Router>
    </>
  );
}

export default App;
