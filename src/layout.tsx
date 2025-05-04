import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div className="flex flex-col bg-[#FDFDFF]">
      <Outlet />
    </div>
  );
};

export default layout;
