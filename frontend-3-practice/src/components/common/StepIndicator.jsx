function StepIndicator() {
  return (
    <section className="booking-steps" aria-label="Шаги оформления записи">
      <div className="container">
        <ol className="steps-list">
          {/* Шаг 1 */}
          <li className="step-item step-item--completed">
            <span className="step-item__badge" aria-hidden="true">&#10003;</span>
            <span className="step-item__title">Мастер</span>
          </li>
          <li className="step-divider step-divider--completed" aria-hidden="true"></li>

          {/* Шаг 2 */}
          <li className="step-item step-item--completed">
            <span className="step-item__badge" aria-hidden="true">&#10003;</span>
            <span className="step-item__title">Услуга</span>
          </li>
          <li className="step-divider step-divider--completed" aria-hidden="true"></li>

          {/* Шаг 3 (Текущий активный шаг) */}
          <li className="step-item step-item--active" aria-current="step">
            <span className="step-item__badge">3</span>
            <span className="step-item__title">Дата и время</span>
          </li>
          <li className="step-divider" aria-hidden="true"></li>

          {/* Шаг 4 */}
          <li className="step-item">
            <span className="step-item__badge">4</span>
            <span className="step-item__title">Контакты</span>
          </li>
          <li className="step-divider" aria-hidden="true"></li>

          {/* Шаг 5 */}
          <li className="step-item">
            <span className="step-item__badge">5</span>
            <span className="step-item__title">Подтверждение</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default StepIndicator;
