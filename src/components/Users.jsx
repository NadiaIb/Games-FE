import { useEffect, useState } from "react";
import { getUsers } from "../../api";

const Users = ({
  isUserLoggedIn,
  setIsUserLoggedIn,
  user,
  setUser,
  userList,
  setUserList,
}) => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const logout = () => {
    setIsUserLoggedIn(false);
    setUser({});
  };
  const handleClick = (user) => {
    setUser(user);
    setIsUserLoggedIn(true);
  };
  useEffect(() => {
    setIsLoadingUsers(true);
    getUsers().then((users) => {
      setUserList(users.users);
      setIsLoadingUsers(false);
    });
  }, [setUserList]);
  if (isLoadingUsers) {
    return <p className="loading">Loading Users...</p>;
  }
  return (
    <div>
      <div>
        {!isUserLoggedIn ? (
          <p>Please select a user from the list</p>
        ) : (
          <div>
            <p>
              <span>{user.name}</span> is logged in
            </p>
            <button onClick={() => logout()}>LOGOUT</button>
          </div>
        )}
      </div>
      <ul className="usersSize">
        {userList.map((thisUser) => {
          return (
            <li
              className="userCard"
              key={thisUser.name}
              onClick={() => handleClick(thisUser)}
            >
              <img
                className="userImg"
                src={thisUser.avatar_url}
                alt={thisUser.username}
              />
              <h3>{thisUser.name}</h3>
              <h4>Username: {thisUser.username}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
