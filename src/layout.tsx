import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const layout = () => {
  return (
    <div className="flex flex-col bg-[#FDFDFF]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default layout;
