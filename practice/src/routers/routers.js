import { createBrowserRouter } from "react-router-dom";
import UseState1 from "../components/useState1";
import Main from "../components";
import UseEffect from "../components/useEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/useState",
    element: <UseState1 />,
  },
  {
    path: "/useEffect",
    element: <UseEffect />,
  },
]);
export default router;
