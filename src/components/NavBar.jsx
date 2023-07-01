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
        <li>
          <Link to="/users"> Users </Link>
        </li>
        <p>User: {userId}</p>
        {/* <li className="navUserButton">
          {isUserLoggedIn ? (
            <Link to="/users">
              <div className="smallUserIcon">
                <img src={user.avatar_url} alt={user.username} />
                <p>{user.username}</p>
              </div>
            </Link>
          ) : (
            <Link className="loginButtonText" to="/users">
              Login
            </Link>
          )}
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
