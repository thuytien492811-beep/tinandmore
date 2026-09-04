import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Strava from "./pages/Strava";
import Cd from "./pages/Cd";
import Editorial from "./pages/Editorial";
import Menu from "./pages/Menu";
import Museum from "./pages/Museum";
import Contact from "./pages/Contact";
import "./styles/common.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/works/strava" element={<Strava />} />
      <Route path="/works/cd" element={<Cd />} />
      <Route path="/works/editorial" element={<Editorial />} />
      <Route path="/works/menu" element={<Menu />} />
      <Route path="/works/museum" element={<Museum />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
