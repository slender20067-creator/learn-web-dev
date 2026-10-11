// ==========================================================================
// ДАННЫЕ СЛОТОВ И «СЕРВЕРА» (MAN CAVE BARBERSHOP)
// ==========================================================================

export const SERVER_DATA = {
  today: { day: 12, month: 9, year: 2026 },
  defaultDay: 24,
  defaultMonth: 9,
  defaultYear: 2026,
  defaultTime: "16:30",
};

// Слоты времени для чётных дней (например, 24 октября в макете MAN CAVE)
export const SLOTS_EVEN_DAY = [
  { time: "11:30", available: true },
  { time: "12:30", available: false },
  { time: "14:00", available: true },
  { time: "15:00", available: false },
  { time: "16:30", available: true },
  { time: "18:00", available: true },
  { time: "19:30", available: true },
  { time: "21:00", available: true },
];

// Слоты времени для нечётных дней (23, 27 октября)
export const SLOTS_ODD_DAY = [
  { time: "11:30", available: true },
  { time: "12:30", available: true },
  { time: "14:00", available: false },
  { time: "15:00", available: true },
  { time: "16:30", available: false },
  { time: "18:00", available: true },
  { time: "19:30", available: true },
  { time: "21:00", available: true },
];

// Стартовые слоты по умолчанию (на 24 октября)
export const DEFAULT_SLOTS = SLOTS_EVEN_DAY;

// Имитация получения слотов на конкретную дату
export function getSlotsForDay(day, month, year) {
  // Альтернативный сценарий: 25 октября нет свободных слотов
  if (day === 25 && month === 9 && year === 2026) {
    return [];
  }
  return day % 2 === 0 ? SLOTS_EVEN_DAY : SLOTS_ODD_DAY;
}
