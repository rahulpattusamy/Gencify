import { useCategory } from "../hooks/useCategory";
import useProducts from "../hooks/useProducts";
import useProductstore from "../store";

const category = () => {
  const { data, error } = useCategory();
  const setCategoryId = useProductstore((s) => s.setCategoryId);
  if (error) <p>{error.message}</p>;

  return (
    <>
      <div className="flex gap-4  ml-7 mt-2 w-lg">
        {data?.map((category) => (
          <button
            onClick={() => setCategoryId(category.id)}
            className="btn3 mt-3 text-sm"
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default category;
