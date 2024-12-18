import styles from './Header.module.css'

function Header() {
    return (
        <header>

            <div className={styles.container}>
                <h1>Loja</h1>
                <i class="fa-solid fa-cart-shopping"></i>
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