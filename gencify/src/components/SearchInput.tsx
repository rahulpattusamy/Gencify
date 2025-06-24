import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="relative">
     <div className="text-black absolute pt-1.5 ml-2 text-2xl">
       <CiSearch/>
     </div>
     
     <input className="bg-white placeholder:text-gray-800 pl-10 font-Poppins p-1.5 w-100 rounded-xl border-0.5"  type="text" placeholder='Search Products' />
    </div>
  )
}

export default SearchInput