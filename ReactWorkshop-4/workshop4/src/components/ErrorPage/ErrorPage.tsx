import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Error 404</h1>
      <p>
        You reached a dead end. Go back to
        <Link to="/" className="link">
          HomePage
        </Link>
      </p>
    </div>
  );
};
