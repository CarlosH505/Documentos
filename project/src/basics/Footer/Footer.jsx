import styles from './Footer.module.css'

function Footer() {
    return (
        
            <footer>
                <p>telefone : (71) 90000-0000</p>


                <div className={styles.icons}>
                    <span>Redes sociais :</span>

                    <a href="#"><i class="fa-brands fa-instagram"></i></a>

                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>

                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.003897521592!2d-38.51567798451371!3d-13.00367571581548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036156d75477%3A0x5f96cd445ba8f856!2sUniversidade%20Federal%20da%20Bahia!5e0!3m2!1spt-BR!2sbr!4v1734651704673!5m2!1spt-BR!2sbr" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                


            </footer>
    )
};

export default Footer;