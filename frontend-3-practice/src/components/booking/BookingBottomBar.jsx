import { MONTHS_GENITIVE, DAYS_OF_WEEK } from "../../data/date";

function BookingBottomBar({ day, month, year, selectedTime, onContinue }) {
  const dateObj = new Date(year, month, day);
  const dayName = DAYS_OF_WEEK[dateObj.getDay()];
  const monthName = MONTHS_GENITIVE[month];
  const timePart = selectedTime ? selectedTime : "время не выбрано";

  return (
    <aside className="summary-bar" aria-label="Итог выбора">
      <div className="summary-bar__info">
        <span className="summary-bar__label">Выбрано:</span>
        <strong className="summary-bar__value">
          {dayName}, {day} {monthName} {year} • {timePart}
        </strong>
      </div>
      <a
        href="#"
        className="btn btn--primary summary-bar__btn"
        onClick={function (e) {
          e.preventDefault();
          onContinue();
        }}
      >
        <span>Продолжить</span>
        <span className="btn__icon" aria-hidden="true">
          &rarr;
        </span>
      </a>
    </aside>
  );
}

export default BookingBottomBar;
