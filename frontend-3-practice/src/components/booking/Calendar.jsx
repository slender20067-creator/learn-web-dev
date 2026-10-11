import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

function Calendar({
  year,
  month,
  selectedDay,
  today,
  onDayClick,
  onPrevMonth,
  onNextMonth,
}) {
  return (
    <section className="calendar-card" aria-label="Выбор даты записи">
      <CalendarHeader
        year={year}
        month={month}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <CalendarGrid
        year={year}
        month={month}
        selectedDay={selectedDay}
        today={today}
        onDayClick={onDayClick}
      />
    </section>
  );
}

export default Calendar;
