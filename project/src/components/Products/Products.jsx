import Footer from '../../basics/Footer/Footer';
import Header from '../../basics/Header/Header.jsx';
import Cart from '../../pages/Cart/Cart';
import styles from './Products.module.css';
import { useEffect, useState } from "react";

function Products({ datas }) {

    const [products, setproducts] = useState([])
    useEffect(() => {
        const arquivos = async () => {
            const resposta = await fetch(" https://fakestoreapi.com/products")
            const json = await resposta.json()
            setproducts(json)
        }
        arquivos()
    }, [])


    const handleAddItem = (cont) => { }

    return (
        <>

            <Header />


            <main className={styles.container}>
                {products.map((product) =>

                    <div className={styles.products}>

                        <img className={styles.imageProducts} src={product.image} alt="Imagens dos produtos" />

                        <p className={styles.title}>{product.title}</p>

                        <p>R$: {product.price}</p>

                        <button onClick={handleAddItem}>Adicionar ao carrinho <i class="fa-solid fa-cart-shopping"></i></button>

                    </div>
                )
                };
            </main>

            <Footer />
        </>
    )
};

export default Products;