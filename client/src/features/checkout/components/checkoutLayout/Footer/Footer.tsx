import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/constants/routes";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.col}>
                <p>Help with your order</p>
                <p className={styles.phone}>+1 877 217 4085</p>
                <p className={styles.email}>customerservice@devenir.com</p>
            </div>
            <div className={styles.col}>
                <p>Secure shopping</p>
                <p>
                    Your security is important to us. For full details of how we protect your payment and personal details, please read our
                    <br />
                    <Link className={styles.privacy} to={ROUTES.LEGAL.PRIVACY_AND_TERMS}> Privacy Statement</Link>
                </p>
                <div className={styles.verifications}>
                    <img src="/images/visaverified.png" alt="visa" />
                    <img src="/images/safekey.png" alt="safekey" />
                    <img src="/images/mastercardsecure.png" alt="mastercard" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
