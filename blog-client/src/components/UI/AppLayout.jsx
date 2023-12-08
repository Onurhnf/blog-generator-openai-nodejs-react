import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mt-10">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
