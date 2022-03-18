import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes path={"/"}>
        <Route index element={<Home />} />
        <Route path={`movies/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
