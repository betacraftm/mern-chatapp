import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      {<CiLogout className="h-6 w-6 cursor-pointer text-white" />}
    </div>
  );
};

export default LogoutButton;
