import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-white bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-sm backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Login Chat App
        </h1>

        <form>
          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <button className="btn btn-sm btn-block mt-5">Login</button>
          </div>

          <p className="mt-2 inline-block text-xs">
            {"Don't"} have an account?{" "}
            <Link to="/signup" className="hover:text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
