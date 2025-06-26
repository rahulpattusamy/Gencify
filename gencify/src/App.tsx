import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import type { Categories } from "./hooks/useCategory";
import Category from "./components/Category";


export interface ProductQuery {
  category: Categories | null;
}

const App = () => {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  return (
    <div>
      <NavBar />
      <Category
        onSelectCategory={(category) =>
          setProductQuery({ ...productQuery, category })
        }
      />
      <ProductCard productQuery={productQuery} />
    </div>
  );
};

export default App;
