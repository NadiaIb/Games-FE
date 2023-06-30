import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Bar">
      <ul> 
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li>
          <Link to="/users"> Users </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
