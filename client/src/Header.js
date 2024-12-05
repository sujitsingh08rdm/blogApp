import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userinfo) => {
        setUsername(userinfo.username);
      });
    });
  }, []);

  return (
    <header>
      <Link to="" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="create">Create new post</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
