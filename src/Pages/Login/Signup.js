import React, { useContext } from "react";
import toast from "react-hot-toast";
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
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log("zx ---->", image, name, email, password);

    const formData = new FormData();
    formData.append("image", image);
    // eb83f37c1fb8e7af42693f75d7c93456
    const url =
      "https://api.imgbb.com/1/upload?expiration=600&key=eb83f37c1fb8e7af42693f75d7c93456";

    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((imgUrls) => {
        const imgUrl = imgUrls.data.display_url;
        //createUser
        createUser(email, password)
          .then((result) => {
            //updateUserProfile
            updateUserProfile(name, imgUrl).then(() => {
              // setAuthToken(result, accountType);
              toast.success("Register Success..");
              setAuthToken(result);
              setLoading(false);
              navigate(from, { replace: true });
            });
            // console.log(" result :>> ", result);
          })
          .catch((err) => {
            toast.error(err.message);
            setLoading(false);
            event.target.reset();
          });
      })
      .catch((err) => {
        toast.error(err.message);
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
      <div className="flex flex-col max-w-md p-6 m-2 rounded-md sm:p-10 bg-gray-100/50 text-gray-900">
        <div className="mb-1 text-center">
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handelSubmit}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1">
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Name</span>
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

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="email@tenleemedia.com"
                  className="input input-bordered  bg-white/50"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Password</span>
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
              {loading ? <SmallSpinner></SmallSpinner> : "Sign in"}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
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
