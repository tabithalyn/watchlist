import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>Home.</h1>
    <ul>
      <li><Link to="/watchlist">Watchlist</Link></li>
      <li><Link to="/watched">Watched</Link></li>
      <li><Link to="/add">Search</Link></li>
      <li><Link to="/discover">Discover</Link></li>
    </ul>
    </>
  );
}
 
export default Home;