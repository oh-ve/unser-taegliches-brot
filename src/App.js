import "./App.css";
import Zitat from "./components/Zitat";
import Home from "./components/Home";
import Autor from "./components/Autor";
import Info from "./components/Info";
import Buch from "./components/Buch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Zitat />
      <Buch />
      <Autor />
      <Info />
      <Footer />
    </div>
  );
}
