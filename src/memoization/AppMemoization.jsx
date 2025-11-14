import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";

const AppMemoization = () => {
    const [ filter, setFilter] = useState("");
    const [products, setProducts] = useState([
        {id: 1, name: "Iphone 14 Pro"},
        {id: 2, name: "Iphone 13 Pro"},
        {id: 3, name: "Iphone 12 Pro"},
        {id: 4, name: "Iphone 11 Pro"},
    ]);

    const filtered = useMemo(() => 
        products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
    , [filter, products]);

    const handleRemove = useCallback((id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    }, []);

    return (
        <div style={{ padding: 20 }}>
        <h2>Product List tối ưu</h2>
        <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Tìm kiếm..."
        />
        <ProductList products={filtered} onRemove={handleRemove} />
        </div>
    );
}

export default AppMemoization;