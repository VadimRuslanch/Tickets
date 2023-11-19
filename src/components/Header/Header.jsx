import './Header.css';
import { Link } from "react-router-dom";
import worldIcon from '../../images/world-icon.svg';
import likeIcon from '../../images/like-icone.svg';
import chatIcon from '../../images/chat-icone.svg';
import caseIcone from '../../images/case-icone.svg'


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="heading-1">
                    <Link className='logo' to={'#'}>
                        <img src={worldIcon} alt='Логотип Земля' />
                        Мои путешествия
                    </Link>
                </h1>
                <nav className="header__menu text-16">

                    <Link className='header__menuList' to={'#'}>
                        <img src={likeIcon} alt='Иконка Лайк' />
                        Избранное
                    </Link>

                    <Link className='header__menuList' to={'#'}>
                        <img src={chatIcon} alt='Иконка Чата' />
                        Поддержака
                    </Link>

                    <Link className='header__menuList' to={'#'}>
                        <img src={caseIcone} alt='Иконка Портфеля'/>
                        Мои поездки
                    </Link>

                </nav>
            </div>
        </header>
    )
}

export default Header;