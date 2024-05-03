import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-white bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-sm backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Sign Up Chat App
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Hoang Ngoc Dat"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="betacraftm"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <GenderCheck />

          <div>
            <button className="btn btn-sm btn-block mt-5">Sign Up</button>
          </div>

          <p className="mt-2 inline-block text-xs">
            Already have an account?{" "}
            <a href="#" className="hover:text-blue-400 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
