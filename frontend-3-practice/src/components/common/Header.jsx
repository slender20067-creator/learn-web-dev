function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="logo" aria-label="MAN CAVE главная">
          MAN CAVE
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Услуги</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Мастера</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Отзывы</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
          </ul>
        </nav>
        <a href="#" className="btn btn--primary header__btn">Записаться</a>
      </div>
    </header>
  );
}

export default Header;
