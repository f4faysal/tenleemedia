import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import SmallSpinner from "../../../Components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const Reports = () => {
  const { user, logout } = useContext(AuthContext);
  // const [text, setTestss] = useState(" ");

  const link = process.env.REACT_APP_SERVER_URL;

  // useEffect(() => {
  //   async function fetchTestJSON() {
  //     const res = await fetch(`${link}/test`, {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("access-token")}`,
  //       },
  //     });

  //     const test = await res.json();
  //     setTimeout(() => {
  //       if (res.status === 401 || res.status === 403) {
  //         logout();
  //       }
  //     }, 5000);
  //     return test;
  //   }

  //   fetchTestJSON().then((data) => setTestss(data));
  // }, [ link , logout]);

  const {
    data: test,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      try {
        const res = await fetch(`${link}/test`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        if (!isLoading) {
          if (res.status === 401 || res.status === 403) {
            logout();
          }
        }
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    console.log("SmallSpinner");
    return <SmallSpinner></SmallSpinner>;
  }

  console.log(test);

  return (
    <div>
      “Report coming soon” {test.message}
      <h1>{link}</h1>
    </div>
  );
};

export default Reports;
