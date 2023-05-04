import React, { useState } from "react"
import InputSearch from "./components/InputSearch"
import ProductCard from "./components/ProductCard"
import "./App.css"

function App() {
    const [products, setProducts] = useState([])

    return (
        <>
            <InputSearch setProducts={setProducts} />
            {products.map((product) => {
                return (
                    <ProductCard
                        image={product.thumbnail}
                        title={product.title}
                        price={product.price}
                    />
                )
            })}
        </>
    )
}

export default App
