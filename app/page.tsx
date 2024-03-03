import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-between max-w-2xl px-5 bg-blue-100 mx-auto">
      <Navbar />
      <h1>hello this is blog main page</h1>
    </div>
  );
}
