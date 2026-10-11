import { useState } from "react";
import Calendar from "../components/booking/Calendar";
import TimeSlots from "../components/booking/TimeSlots";
import BookingBottomBar from "../components/booking/BookingBottomBar";
import { SERVER_DATA, DEFAULT_SLOTS, getSlotsForDay } from "../data/slots";

function BookingScreen() {
  const today = SERVER_DATA.today;

  // ==========================================================================
  // Состояние страницы (5 обязательных useState по заданию)
  // ==========================================================================
  const [currentMonth, setCurrentMonth] = useState(SERVER_DATA.defaultMonth);
  const [currentYear, setCurrentYear] = useState(SERVER_DATA.defaultYear);
  const [selectedDay, setSelectedDay] = useState(SERVER_DATA.defaultDay);
  const [selectedTime, setSelectedTime] = useState(SERVER_DATA.defaultTime);
  const [slots, setSlots] = useState(DEFAULT_SLOTS);

  // ==========================================================================
  // Обработчики событий
  // ==========================================================================

  // Клик по числу в календаре: меняет день, сбрасывает время, загружает слоты
  function handleDayClick(day) {
    setSelectedDay(day);
    setSelectedTime(null);
    setSlots(getSlotsForDay(day, currentMonth, currentYear));
  }

  // Клик по слоту времени: выбирает время
  function handleTimeClick(time) {
    setSelectedTime(time);
  }

  // Навигация по месяцам: назад
  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  // Навигация по месяцам: вперед
  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  // Кнопка «Продолжить» в нижней плашке
  function handleContinue() {
    if (!selectedTime) {
      alert("Пожалуйста, выберите удобное время для записи.");
      return;
    }
    try {
      localStorage.setItem(
        "mancave-booking",
        JSON.stringify({
          day: selectedDay,
          month: currentMonth,
          year: currentYear,
          time: selectedTime,
        })
      );
      alert(`Запись сохранена: ${selectedDay} октября в ${selectedTime}`);
    } catch (e) {}
  }

  return (
    <main className="main-content">
      <div className="container">
        {/* Заголовок страницы и кнопка Назад */}
        <div className="page-header">
          <a
            href="#"
            className="back-link"
            onClick={function (e) {
              e.preventDefault();
            }}
          >
            <span className="back-link__icon" aria-hidden="true">
              &larr;
            </span>
            <span>Назад</span>
          </a>
          <div className="page-header__content">
            <h1 className="page-header__title">Выберите дату и время</h1>
            <p className="page-header__subtitle">
              Мастер: Роман Белов &bull; Услуга: Фирменная стрижка Man Cave +
              Моделирование бороды с компрессом
            </p>
          </div>
        </div>

        {/* Сетка выбора даты и времени (две колонки) */}
        <div className="booking-grid">
          <Calendar
            year={currentYear}
            month={currentMonth}
            selectedDay={selectedDay}
            today={today}
            onDayClick={handleDayClick}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />

          <TimeSlots
            slots={slots}
            selectedDay={selectedDay}
            month={currentMonth}
            selectedTime={selectedTime}
            onTimeClick={handleTimeClick}
          />
        </div>

        {/* Нижняя панель с выбранным временем */}
        <BookingBottomBar
          day={selectedDay}
          month={currentMonth}
          year={currentYear}
          selectedTime={selectedTime}
          onContinue={handleContinue}
        />
      </div>
    </main>
  );
}

export default BookingScreen;
