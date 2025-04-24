import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import RegisterItem from "./pages/registeritem";
import ItemList from "./pages/itemlist";
import EditItem from "./pages/edititem";
import Home from "./pages/home";
import MyItems from "./pages/myitens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/cadastro-item" element={<RegisterItem />} />
        <Route path="/lista" element={<ItemList />} />
        <Route path="/editar" element={<EditItem />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/meus-itens" element={<MyItems />} />
      </Routes>
    </Router>
  );
}

export default App;
