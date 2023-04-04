import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../Components/Spinner/SmallSpinner";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import Logo from "./Logo";

const Login = () => {
  const [accuntType, setAccountType] = useState("user");

  const { signInWithGoogle, signin, resetPassword, loading, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signin(email, password)
      .then((res) => {
        toast.success("Logine Success..");
        setAuthToken(res);
        navigate(from, { replace: true });
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
      toast.success("Logine Success..");
      navigate(from, { replace: true });

      console.log("Google user :>> ", result);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8  gap-5  bg-[url('https://tenleemedia.com/wp-content/uploads/2020/10/tenleemedia-works.jpg')] h-screen w-full bg-cover">
      <Logo />
      <div className="flex flex-col max-w-md p-5 rounded-md sm:p-8  bg-white/50  text-gray-900 ">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handelSubmit}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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

          <div>
            <button
              type="submit "
              className="btn btn-outline btn-primary w-full "
            >
              {loading ? <SmallSpinner></SmallSpinner> : "Sign in"}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline text-gray-800">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center  space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-white"></div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handelSignInWithGoogle}
              aria-label="Log in with Google"
              className="p-1 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 h-px sm:w-16 dark:bg-white"></div>
        </div>

        <p className="px-6 text-sm text-center text-gray-500">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline text-[#2498ad] hover:text-secondary font-semibold"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
