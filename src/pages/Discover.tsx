import { Link } from "react-router-dom";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import Upcoming from "../components/Upcoming";

const Discover = () => {
  
  return (
    <div className="py-7 px-0">
      <div className="px-auto py-4">
        <Link to="/">Home</Link>
      </div>
      <div className="px-auto py-4">
        <Popular />
      </div>
      <div className="px-auto py-4">
        <NowPlaying />
      </div>
      <div className="px-auto py-4">
        <Upcoming />
      </div>
    </div>
  );
}
 
export default Discover;