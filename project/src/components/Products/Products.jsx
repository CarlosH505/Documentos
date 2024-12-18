import styles from './Products.module.css';
import { useEffect, useState } from "react";

function Products() {

    const [products, setproducts] = useState([])
    useEffect(() => {
        const arquivos = async () => {
            const resposta = await fetch(" https://fakestoreapi.com/products")
            const json = await resposta.json()
            setproducts(json)
        }
        arquivos()
    }, [])

    return (
        <main className={styles.container}>
            {products.map ((product) => 

                <div className={styles.products}>
                    {product.title}

                <img className={styles.imageProducts} src={product.image} alt="Imagens dos produtos" />
                </div>
            )
            };
        </main>
    )
};

export default Products;