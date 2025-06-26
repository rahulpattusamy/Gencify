import { useCategory, type Categories } from "../hooks/useCategory";

interface Props{
  onSelectCategory:(category:Categories)=>void

}


const category = ({onSelectCategory}:Props) => {
  const { data, error } = useCategory();

  
  if(error )<p>{error.message}</p>


  return (
    
    <div className="flex gap-4  ml-7 mt-6 w-lg">
      {data?.map((category) => (
        <button onClick={()=>onSelectCategory(category)} className="btn3 mt-3 text-sm" key={category.id}>{category.name}</button>
      ))}
  </div>
  );
};

export default category;
