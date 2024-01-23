import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';
import Webinar from './Pages/Webinar';
import Insights from './Pages/Insights';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Helmet>
            <title>Flentis VMS</title>
            <meta name="description" content="Flentis is a VMS Company" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insight" element={<Insights />}>
              <Route path=":type" element={<Insights />} />
            </Route>
            <Route path="/insight/webinar/:title" element={<Webinar />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
