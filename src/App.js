import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* USER */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Layout />}>
            {/* Children components here */}
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* ADMIN */}
      </BrowserRouter>
    </>
  );
}

export default App;
