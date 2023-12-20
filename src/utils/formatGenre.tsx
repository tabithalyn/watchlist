export default function formatGenre(genre:number) {
  switch (genre) {
    case 80:
      return <span className="bg-red-900 rounded-full p-2 text-[9px] uppercase text-red-100">Crime</span>
    case 12:
      return <span className="bg-[#dfa23f] rounded-full p-2 text-[9px] uppercase text-orange-100">Adventure</span>
    case 28:
      return <span className="bg-indigo-600 rounded-full p-2 text-[9px] uppercase text-indigo-100">Action</span>
    case 16:
      return <span className="bg-pink-700 rounded-full p-2 text-[9px] uppercase text-pink-100">Animation</span>
    case 35:
      return <span className="bg-cyan-600 rounded-full p-2 text-[9px] uppercase text-cyan-100">Comedy</span>
    case 99:
      return <span className="bg-purple-800 rounded-full p-2 text-[9px] uppercase text-purple-100">Documentary</span>
    case 18:
      return <span className="bg-blue-800 rounded-full p-2 text-[9px] uppercase text-blue-100">Drama</span>
    case 10751:
      return <span className="bg-fuchsia-700 rounded-full p-2 text-[9px] uppercase text-fuchsia-100">Family</span>
    case 14:
      return <span className="bg-green-700 rounded-full p-2 text-[9px] uppercase text-green-100">Fantasy</span>
    case 36:
      return <span className="bg-amber-700 rounded-full p-2 text-[9px] uppercase text-amber-100">History</span>
    case 27:
      return <span className="bg-rose-600 rounded-full p-2 text-[9px] uppercase text-rose-100">Horror</span>
    case 10402:
      return <span className="bg-lime-600 rounded-full p-2 text-[9px] uppercase text-lime-100">Music</span>
    case 9648:
      return <span className="bg-teal-700 rounded-full p-2 text-[9px] uppercase text-teal-100">Mystery</span>
    case 10749:
      return <span className="bg-[#d74b7f] rounded-full p-2 text-[9px] uppercase text-rose-100">Romance</span>
    case 878:
      return <span className="bg-violet-700 rounded-full p-2 text-[9px] uppercase text-violet-100">Science Fiction</span>
    case 10770:
      return <span className="bg-green-700 rounded-full p-2 text-[9px] uppercase text-green-100">TV Movie</span>
    case 53:
      return <span className="bg-[#af2f23] rounded-full p-2 text-[9px] uppercase text-red-100">Thriller</span>
    case 10752:
      return <span className="bg-yellow-500 rounded-full p-2 text-[9px] uppercase text-yellow-100">War</span>
    case 37:
      return <span className="bg-orange-600 rounded-full p-2 text-[9px] uppercase text-orange-100">Western</span>
    default:
      return null;
  }
}