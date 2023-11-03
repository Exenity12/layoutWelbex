import './Header.css';
import whatsApp from '../../assets/whatsApp.png';
import telegram from '../../assets/telegram.png';
import viber from '../../assets/viber.png';
import logo from '../../assets/logo.png';

function Header() {
  const links = [
    {text: "Услуги", id: 0, specialClass: "none"},
    {text: "Виджеты", id: 1, specialClass: "none"},
    {text: "Интеграции", id: 2, specialClass: "none"},
    {text: "Кейсы", id: 3, specialClass: "none"},
    {text: "Сертификаты", id: 4, specialClass: "mobile"},
  ];

  const messengers = [
    {id: 0, src: telegram, class: 'header__about-massengers-img_telegram'},
    {id: 1, src: viber, class: 'header__about-massengers-img_viber'},
    {id: 2, src: whatsApp, class: 'header__about-massengers-img_whatsApp'},
  ];

  return (
    <header className="header">
      <div className='header__menu-important'>

        <div className='header__logo'>
          <img className='header__logo-img' src={logo} alt='error'></img>
        </div>

        <nav className='header__links-wrap'>
          <ul className='header__links'>
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`header__links-item ${link.specialClass}`}>
                  {link.text}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='header__about'>
          <div className='header__about-number'>+7 555 555-55-55</div>
          
          <div className='header__about-massengers'>
            {messengers.map((messenger) => {
              return (
                <li 
                  key={messenger.id}
                  className='header__about-massengers-item'>
                  <img
                    className={messenger.class}
                    src={messenger.src}
                    alt='error'>
                  </img>
                </li>
              )
            })}
          </div>
        </div>
        
      </div>

      <span className='header__logo-text'>
        крупный интегратор CRM 
        <br></br>
        в России и ещё 8 странах
      </span>

    </header>
  );
}

export default Header;
