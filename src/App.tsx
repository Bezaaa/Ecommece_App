import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/app";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
