export const  setAuthToken = (user) => {
  console.log("fix a user data dave to bd", user.user);

  const currentUser = {
    email: user.user.email,
    user: user.user,
  };
  //sev user in db and grt token
  const apiUrl = process.env.REACT_APP_SERVER_URL;
   console.log("apiUrl call setAuthToken => ", apiUrl);

    fetch(`${apiUrl}/user/${user?.user?.email}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())

    .then((data) => {
      console.log("accessToken =>", data);
      localStorage.setItem("access-token", data.token);
    });
  // console.log("call", user);
};
