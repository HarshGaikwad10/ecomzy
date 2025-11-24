import "./App.css";
import UserLayout from "./components/Layout/UserLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           {/*User Layout */}
          <Route path="/" element={<UserLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
