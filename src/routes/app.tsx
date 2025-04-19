// src/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../__root/pages/Home/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
