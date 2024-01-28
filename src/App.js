import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* USER */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            {/* Children components here */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* ADMIN */}
      </BrowserRouter>
    </>
  );
}

export default App;
