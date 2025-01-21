import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
