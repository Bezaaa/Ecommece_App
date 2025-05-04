// src/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";

import WelcomePage from "@/__root/pages/WelcomePage/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
}
