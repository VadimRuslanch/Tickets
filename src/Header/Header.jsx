import './Header.css';
import { Link } from "react-router-dom";
import worldIcon from '../images/world-icon.svg';


export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo heading-1">
                    <Link className='header__logo' to={'#'}>
                        <img src={worldIcon} alt='Логотип Земля' />
                        Мои путешествия
                    </Link>
                </h1>
                <nav className="header__menu text-16">
                    <p className="header__menu-link">Избранное</p>
                    <p className="header__menu-link">Поддержака</p>
                    <p className="header__menu-link">Мои поездки</p>
                </nav>
            </div>
        </header>
    )
}