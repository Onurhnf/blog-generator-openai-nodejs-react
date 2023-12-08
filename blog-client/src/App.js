import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { initializeParse } from "@parse/react";
import PageNotFound from "./pages/PageNotFound.jsx";
import MainPage from "./pages/MainPage.jsx";
import DetailPage from "./components/Blog/BlogDetail.component.jsx";
import AppLayout from "./components/UI/AppLayout.jsx";

initializeParse(
  "https://demarke.b4a.io/",
  process.env.REACT_APP_BACK4APP_APP_ID,
  process.env.REACT_APP_BACK4APP_JS_KEY
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/blog/:postId" element={<DetailPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}

export default App;
