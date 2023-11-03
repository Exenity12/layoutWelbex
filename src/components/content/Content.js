import './Content.css';

import line from '../../assets/line.png'

function Content() {
  const presents = [
    {title: "ВИДЖЕТЫ", text: "30 готовых решений", id: 0},
    {title: "DASHBOART", text: "с показателями вашего бизнеса", id: 1},
    {title: "SKYPE АУДИТ", text: "отдела продаж и CRM системы", id: 2},
    {title: "35 ДНЕЙ", text: "использования CRM", id: 3},
  ];

  const presentsMobile = [
    {title:"SKYPE АУДИТ", id: 0},
    {title: "30 ВИДЖЕТОВ", id: 1},
    {title: "DASHBOART", id: 2},
    {title: "МЕСЯЦ AMOCRM", id: 3},
  ];

  return (
    <div className='content'>

      <div className='content__left-bar'>
        <h2
          className='content__left-bar_title'>
          Зарабатывайте
          <br></br>
          больше
        </h2>

        <h2 className='content__left-bar_title-gradient'>с WELBEX</h2>

        <span
          className='content__left-bar_text'>
          Развиваем и контролируем
          <br></br>
          продажи за вас
        </span>
      </div>

      <div className='content__right-bar'>

        <div className='content__right-bar_present-gradient'>
          <div>
            <span className='content__right-bar_present'>Вместе с</span> БЕСПЛАТНОЙ
            <br></br>
            КОНСУЛЬТАЦИЕЙ <span className='content__right-bar_present'>мы дарим:</span>
          </div>
        </div>

        <ul className='content__right-bar_presents'>
          {presents.map((present) => {
            return (
              <li
                className='presents_item'
                key={present.id}>
                <h3 className='presents_item-title'>{present.title}</h3>
                <span className='presents_item-text'>{present.text}</span>
              </li>
            )
          })}

          {presentsMobile.map((present) => {
            return (
              <li
                className='presents_item-mobile'
                key={present.id}>
                <h3 className='presents_item-mobile-title'><img src={line} className='presents_item-mobile_img'></img>{present.title}</h3>
              </li>
            )
          })}

        </ul>

        <button className='content__right-bar_button'>Получить консультацию</button>

      </div>

    </div>
  );
}

export default Content;