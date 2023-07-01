import { Link } from "react-router-dom";

function NavBar({ userId }) {
  return (
    <nav className="Bar">
      <ul className="barUl">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <p>User: {userId}</p>
      </ul>
    </nav>
  );
}

export default NavBar;
