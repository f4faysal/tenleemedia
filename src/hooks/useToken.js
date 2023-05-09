// import { useEffect, useState } from "react";

// const useToken = (email) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:5000/jwt?email=${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.accessToken) {
//             localStorage.setItem("accessToken", data.accessToken);
//             setToken(data.accessToken);
//           }
//         });
//     }
//   }, [email]);
//   return [token];
// };

// export default useToken;

import axios from "axios";
import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log("for generate token", user);
  useEffect(() => {
    const email = user?.email;
    // console.log('email', email)
    const uid = user?.uid;
    // console.log('uid', uid);
    const currentUser = {
      email: email,
      uid: uid,
    };
    if (email && uid) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/user/${email}`, currentUser)
        .then((res) => {
          // console.log(res?.data?.data);
          const accessToken = res?.data?.data;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
          console.log("accessToken =>", accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
