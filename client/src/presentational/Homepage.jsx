import library from "../img/library.png";
import Quote from "../components/Quote";

export default function Homepage() {
  return (
    <div className="flex flex-row items-center justify-center mx-5">
      <img src={library}></img>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-white">
          Book search enging built uppon Google Books API
        </h2>
        <Quote />
        <button className="w-1/3 h-16 bg-white border rounded-lg">Login</button>
      </div>
    </div>
  );
}
