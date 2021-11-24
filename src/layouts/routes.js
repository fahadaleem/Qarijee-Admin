import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
const Layouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Layouts;
