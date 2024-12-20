import styles from './Header.module.css'

function Header() {

    const userName = "Usuário"
    return (
        <header>

            <div className={styles.container}>
                
                    <h1>Loja</h1>
                
                <div className={styles.icons}>
                    <i class="fa-solid fa-cart-shopping"> <span className={styles.cart}> 1</span></i> 

                    <div className={styles.user}>
                        <i class="fa-solid fa-user"></i>
                        <p>{userName}</p>
                    </div>

                </div>

            </div>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Produtos</li>
                    <li>sobre nós</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;