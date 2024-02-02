import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';
import Insights from './Pages/Insights';
import { Helmet } from 'react-helmet-async';
import StaffingThesaurus from './Pages/StaffingThesaurus';
import WebinarDetails from "./Pages/InsightDetails/WebinarDetails";
import BlogDetails from './Pages/InsightDetails/BlogDetails';
import CaseStudyDetails from './Pages/InsightDetails/CaseStudyDetails';
import InfographicsDetails from './Pages/InsightDetails/InfographicsDetails';

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
          <Route path="/staffing-thesaurus" element={<StaffingThesaurus />} />
          <Route path="/insight" element={<Insights />}>
            <Route path=":type" element={<Insights />} />
          </Route>
          <Route
            path="/insight/webinar/:url_link"
            element={<WebinarDetails />}
          />
          <Route path="/insight/blog/:url_link" element={<BlogDetails />} />
          <Route
            path="/insight/case-study/:url_link"
            element={<CaseStudyDetails />}
          />
          <Route
            path="/insight/infographics/:url_link"
            element={<InfographicsDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
