import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/paginas/paginaInicial/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/quicksand";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;