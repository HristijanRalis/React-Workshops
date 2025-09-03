import { Link } from "react-router";

type Props = {};

export const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>All images</Link>
      <Link to={"/favorites"}>
        <i className="fa-2x fa fa-heart"></i>
      </Link>
    </div>
  );
};
