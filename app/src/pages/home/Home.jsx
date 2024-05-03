import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white bg-opacity-0 bg-clip-padding backdrop-blur-sm backdrop-filter sm:h-[450px] md:h-[550px]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
