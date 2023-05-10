import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Reports = () => {
  const { user, logout } = useContext(AuthContext);
  const [text, setTestss] = useState(" ");

  useEffect(() => {
    async function fetchTestJSON() {
      const res = await fetch(`http://localhost:5000/test`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        logout();
      }
      const test = await res.json();
      return test;
    }

    fetchTestJSON().then((data) => setTestss(data));
  }, []);

  console.log(text);

  return <div>“Report coming soon” {text.message}</div>;
};

export default Reports;
