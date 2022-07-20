import { Button } from "@mui/material"
import { ProductsData } from "../../Data/ProductsData"

const Products = () => {
    return (
        <div>
            {ProductsData.map((product, i) => (
                <div key={i}>
                    
                    <div>
                        <p>
                            {product.name} - {product.price}
                        </p>
                    </div>
                    <div>
                        <p>
                            {product.stock}
                        </p>
                    </div>
                    <Button variant="contained" onClick={() => { console.log(product) }}> Add to cart </Button>
                </div>
            ) )}
        </div>
    )
}

export default Products