import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

const InputSearch = ({ setProducts }) => {
    const [searchValue, setSearchValue] = useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearch = async () => {
        toast.info("Cargando Resultados", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        })

        const response = await axios.get(
            `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`
        )

        setProducts(response.data.results)
    }

    return (
        <>
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={handleChange}
            />
            <button
                className="search-button"
                type="submit"
                onClick={handleSearch}
            >
                Buscar
            </button>
            <ToastContainer />
        </>
    )
}

export default InputSearch
