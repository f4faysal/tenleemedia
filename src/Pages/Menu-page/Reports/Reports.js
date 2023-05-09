import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Reports = () => {
  const { user, logout } = useContext(AuthContext);
  const [text, setTestss] = useState(" ");

  useEffect(() => {
    fetch(`http://localhost:5000/test`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
        }
        return res.json();
      })
      .then((data) => setTestss(data));
  }, []);

  console.log(text);

  return <div>hi {text.message}</div>;
};

export default Reports;
