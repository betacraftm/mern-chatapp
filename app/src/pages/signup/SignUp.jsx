import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    pwd: "",
    confirmPwd: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-white bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-sm backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Sign Up Chat App
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Hoang Ngoc Dat"
              className="input input-bordered h-10 w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
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
              value={inputs.pwd}
              onChange={(e) => setInputs({ ...inputs, pwd: e.target.value })}
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
              value={inputs.confirmPwd}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPwd: e.target.value })
              }
            />
          </div>

          <GenderCheck
            handleCheckBox={handleCheckBox}
            selectedGender={inputs.gender}
          />

          <div>
            <button className="btn btn-sm btn-block mt-5" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <p className="mt-2 inline-block text-xs">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-blue-400 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
