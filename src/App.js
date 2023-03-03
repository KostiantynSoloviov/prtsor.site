import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './pages/Header/Header/Header';
import { MainPage } from './pages/MainPage/MainPage'
import { Footer } from './pages/Footer/Footer';

import { About } from './pages/About/About';

import { MainBlock } from './components/CenterBlock/components/MainBlock/MainBlock';
import { Setting } from './components/CenterBlock/components/Setting/Setting';
import { Events } from './components/CenterBlock/components/Events/Events';
import { Contacts } from './components/CenterBlock/components/Contacts/Contacts';
import { Collage } from './components/Collage/Collage';

function App() {

  return (
    <>
      <Header />
      {/* <Routes> */}
      {/* <Route path="/" element={<MainPage />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contacts" element={<Contact />} />
                        <Route path="/category/:name" element={<Category />} />
                        <Route path="/meal/:id" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="" element={<MainBlock />} />
          <Route path="setting" element={<Setting />} />
          <Route path="events" element={<Events />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="/collage" element={<Collage />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
