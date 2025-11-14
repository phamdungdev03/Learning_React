import React from "react";

const ProductList = React.memo(({ products, onRemove }) => {
  console.log("Render lại ProductList");
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name}
          <button onClick={() => onRemove(p.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
});

export default ProductList;
