import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../Components/Spinner/SmallSpinner";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    // const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const number = event.target.number.value;
    const conpanyName = event.target.conpanyName.value;

    console.log(
      "User Data  ---->",
      // image,
      name,
      email,
      password,
      number,
      conpanyName
    );

    // const formData = new FormData();
    // formData.append("image", image);
    // // eb83f37c1fb8e7af42693f75d7c93456
    // const url =
    //   "https://api.imgbb.com/1/upload?expiration=600&key=eb83f37c1fb8e7af42693f75d7c93456";

    // fetch(url, { method: "POST", body: formData })
    //   .then((res) => res.json())
    //   .then((imgUrls) => {
    //     const imgUrl = imgUrls.data.display_url;
    //     //createUser

    //   })
    //   .catch((err) => {
    //     toast.error(err.message);
    //     setLoading(false);
    //     event.target.reset();
    //   });

    createUser(email, password)
      .then((result) => {
        //updateUserProfile
        updateUserProfile(name).then(() => {
          // setAuthToken(result, accountType , conpanyName , number );
          toast.success("Register Success..");
          setAuthToken(result);
          setLoading(false);
          navigate(from, { replace: true });
        });
        // console.log(" result :>> ", result);
      })
      .catch((err) => {
        toast.error("please try again");
        setLoading(false);
        event.target.reset();
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      setAuthToken(result);
      navigate(from, { replace: true });
      console.log("Google user :>> ", result);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8  gap-5  bg-[url('https://tenleemedia.com/wp-content/uploads/2020/10/tenleemedia-works.jpg')] h-screen w-full bg-cover">
      <div className="flex flex-col max-w-md p-6 m-2 rounded-md sm:p-10 bg-gray-100/80 text-gray-900">
        <div className="mb-1 text-center">
          <p className="text-sm text-gray-800">Create a new account</p>
        </div>
        <form
          onSubmit={handelSubmit}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            {/* name */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name Here"
                  className="input input-bordered  bg-white/50"
                />
              </label>
            </div>
            {/* profile img */}
            {/* <div>
              <input
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div> */}
            {/* phone Number */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  required
                  placeholder="Phone Number"
                  className="input input-bordered  bg-white/50"
                />
              </label>
            </div>

            {/* Company Name */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                {/* <span>Email</span> */}
                <input
                  type="text"
                  name="conpanyName"
                  id="text"
                  placeholder="Company Name"
                  className="input input-bordered  bg-white/50"
                />
              </label>
            </div>
            {/* email */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  className="input input-bordered  bg-white/50"
                />
              </label>
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="input input-bordered   bg-white/50"
                />
              </label>
            </div>
          </div>
          <div className=" mt-0">
            <button
              type="submit "
              className="btn btn-outline btn-primary w-full "
            >
              {loading ? <SmallSpinner></SmallSpinner> : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-2 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          Already account yet?
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <p className="px-6 text-sm text-center text-gray-400">
          {" "}
          <Link
            to="/login"
            className="hover:underline text-red-700 hover:text-secondary font-semibold"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
