import { Link } from "react-router-dom";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import Upcoming from "../components/Upcoming";

const Discover = () => {
  
  return (
    <div className="py-7 px-0 flex justify-center flex-wrap">
      <div className="px-auto py-4">
        <Link to="/">Home</Link>
      </div>
      <div className="px-auto py-4 flex flex-wrap w-[97vw] justify-center">
        <Popular />
      </div>
      <div className="px-auto py-4 flex flex-wrap w-[97vw] justify-center">
        <NowPlaying />
      </div>
      <div className="px-auto py-4 flex flex-wrap w-[97vw] justify-center">
        <Upcoming />
      </div>
    </div>
  );
}
 
export default Discover;