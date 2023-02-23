import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './pages/Header/Header/Header';
import { MainPage } from './pages/MainPage/MainPage'


function App() {

  return (
    <>
      <Router basename="/">
        <Header />
        <MainPage />
        {/* <ButtonGroup/> */}

      </Router>
    </>
  );
}

export default App;
