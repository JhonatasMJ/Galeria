import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageComponents from "./pages/components";
import Layout from "./pages/_layout";
import Home from "./pages/home";
import PhotoDetails from "./pages/photo-details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/fotos/:id" element={<PhotoDetails/>} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
