import './Footer.css';

import whatsApp from '../../assets/whatsApp.png';
import telegram from '../../assets/telegram.png';
import viber from '../../assets/viber.png';

function Footer() {
  const menuLinks = [
    {name: "Расчет стоимости"},
    {name: "Кейсы"},
    {name: "Услуги"},
    {name: "Благодарственные письма"},
    {name: "Виджеты"},
    {name: "Сертификаты"},
    {name: "Интеграции"},
    {name: "Блог на YouTube"},
    {name: "Наши клиенты"},
    {name: "Вопрос / Ответ"},
  ];

  const messengers = [
    {src: telegram, class: 'messengers__telegram'},
    {src: viber, class: 'messengers__viber'},
    {src: whatsApp, class: 'messengers__whatsApp'},
  ];

  return (
    <footer className='footer'>

      <div className='footer__about'>
        <h3 className='footer__about-title'>о компании</h3>
        <span className='footer__about-text'>Партнёрская программа</span>
        <span className='footer__about-text'>Вакансии</span>
      </div>


      <div className='footer__menu'>
        <h3 className='footer__menu-title'>меню</h3>
        <ul className='footer__menu-list'>
          {menuLinks.map((link, index) => {
            return (
              <li
                className='footer__menu-list_item'
                key={index}>
                {link.name}
              </li>
            )
          })}
        </ul>
      </div>


      <div className='footer__contacts'>

        <h3 className='footer__contacts_name'>контакты</h3>

        <div className='footer__contacts_number'>+7 555 555-55-55</div>

        <ul className='footer__contacts_messengers'>
          {messengers.map((messenger, index) => {
            return (
              <li 
                key={index}
                className='footer__about-massengers-item'>
                <img
                  className={messenger.class}
                  src={messenger.src}
                  alt='error'>
                </img>
              </li>
            )
          })}
        </ul>

        <span className='footer__contacts_address'>Москва, Путевой проезд 3с1, к 902</span>

        <span className='footer__contacts_all-rights'>
          ©WELBEX 2022. Все права защищены.
          <br></br>
          <div className='footer__contacts_all-rights_emphatically'>Политика конфиденциальности</div>
        </span>
      </div>

    </footer>
  );
}

export default Footer;
