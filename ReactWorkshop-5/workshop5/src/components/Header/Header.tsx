import { Link } from "react-router";
import { ROUTES } from "../../routes/routes";

type Props = {};

export const Header = () => {
  return (
    <div className="header">
      <Link to={ROUTES.imageList}>All images</Link>
      <Link to={ROUTES.favorites}>
        <i className="fa-2x fa fa-heart"></i>
      </Link>
    </div>
  );
};
