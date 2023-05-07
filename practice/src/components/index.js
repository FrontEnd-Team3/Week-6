import { Link } from "react-router-dom";
import { MainButton } from "./MainButton";

function Main() {
  return (
    <>
      <Link to="/useState">
        <MainButton>Hook에 대해 알아봐요</MainButton>
      </Link>
    </>
  );
}
export default Main;
