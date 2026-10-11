import { MONTHS_GENITIVE } from "../../data/date";

function TimeSlots({ slots, selectedDay, month, selectedTime, onTimeClick }) {
  const monthName = MONTHS_GENITIVE[month];

  return (
    <section className="time-card" aria-label="Выбор времени записи">
      <div className="time-card__top">
        <h2 className="time-card__title">
          Доступное время &bull; {selectedDay} {monthName}
        </h2>
      </div>

      <div className="time-slots-grid" role="group" aria-label="Слоты времени">
        {!slots || slots.length === 0 ? (
          <div className="time-slots-empty">
            В этот день нет свободных слотов для записи
          </div>
        ) : (
          slots.map(function (slot) {
            let classes = "time-slot";
            if (!slot.available) classes += " unavailable";
            if (slot.time === selectedTime && slot.available) {
              classes += " selected";
            }

            function handleClick() {
              if (slot.available) {
                onTimeClick(slot.time);
              }
            }

            return (
              <button
                type="button"
                className={classes}
                key={slot.time}
                disabled={!slot.available}
                data-time={slot.time}
                onClick={handleClick}
              >
                <span className="time-slot__time">{slot.time}</span>
                {!slot.available && (
                  <span className="time-slot__label">(Занято)</span>
                )}
                {slot.available && slot.time === selectedTime && (
                  <span className="time-slot__icon" aria-hidden="true">
                    &#10003;
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>
    </section>
  );
}

export default TimeSlots;
