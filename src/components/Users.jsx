import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";

function Users() {
  const [eachUser, setEachUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setEachUser(users.users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Users are loading...</h2>;
  } else {
    return (
      <section>
        <h2>Users</h2>
        <ul>
          {eachUser.map((user) => {
            // console.log(user)
            return (
              <li key={user.username}>
                <img src={user.avatar_url} alt={user.avatar_url} />
                <p>{user.name}</p>
                <p>Username:{user.username}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Users;
