// App.jsx or wherever your routes are defined
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import About from "./pages/About";
import Services from "./pages/Services";
import PlansAndPricing from "./pages/Plans";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricing" element={<PlansAndPricing />} />
     
        </Route>
      </Routes>
    </Router>
  );
}
