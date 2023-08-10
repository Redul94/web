import { BsGrid3X3GapFill } from "react-icons/bs";

export default function NavLogo() {
  return (
    <div className="pl-30 bg-red-100 flex justify-stretch">
      <button className=" mt-3 rounded-md bg-blue-300 text-xl font-medium hover:bg-blue-500">
        <BsGrid3X3GapFill />
      </button>
      <button className=" pl-4  text-lg font-medium">Logo</button>
    </div>
  );
}
