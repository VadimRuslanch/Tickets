import { Link } from "react-router-dom";
import worldIcon from '../../images/world-icon.svg';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="heading-2">
                    <Link className='logo' to={'#'}>
                        <img src={worldIcon} alt='Логотип Земля' />
                        Мои путешествия
                    </Link>
                </h2>
                <p className="text-16">Выбирайте нас</p>
            </div>
        </footer>
    )
}

export default Footer;