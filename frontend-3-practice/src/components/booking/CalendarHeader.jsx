import { MONTHS_NOMINATIVE } from "../../data/date";

function CalendarHeader({ year, month, onPrevMonth, onNextMonth }) {
  return (
    <div className="calendar-card__top">
      <h2 className="calendar-card__month">
        {MONTHS_NOMINATIVE[month]} {year}
      </h2>
      <div className="calendar-card__nav" aria-label="Переключение месяца">
        <button
          type="button"
          className="calendar-nav-btn calendar-nav-prev"
          aria-label="Предыдущий месяц"
          onClick={onPrevMonth}
        >
          &lsaquo;
        </button>
        <button
          type="button"
          className="calendar-nav-btn calendar-nav-next"
          aria-label="Следующий месяц"
          onClick={onNextMonth}
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
