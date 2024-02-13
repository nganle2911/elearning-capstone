import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import SearchCourse from "./pages/SearchCourse/SearchCourse";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* USER */}
        <Routes>
          

          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Children components here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/search-course/:keywords" element={<SearchCourse />} />
            <Route path="/catalog/:maDanhMuc" element={<Catalog />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* ADMIN */}
      </BrowserRouter>
    </>
  );
}

export default App;
