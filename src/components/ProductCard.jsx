import React from "react"

const ProductCard = ({ image, title, price }) => {
    return (
        <>
            <div className="card">
                <img src={image} alt="Imagen del Producto" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-price">${price}</h4>
                </div>
            </div>
        </>
    )
}

export default ProductCard
