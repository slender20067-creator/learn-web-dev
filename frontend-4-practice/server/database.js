// «База данных» сервера для MAN CAVE BARBERSHOP
//
// Содержит:
//   - today — «сегодня» по мнению сервера ({ day: 12, month: 9, year: 2026 });
//   - defaultDay — день, выбранный по умолчанию (24 октября 2026);
//   - slotsEvenDay / slotsOddDay — два набора слотов в соответствии с макетом.

export const database = {
  // «Сегодня» — 12 октября 2026 года
  today: {
    day: 12,
    month: 9,
    year: 2026,
    defaultDay: 24,
  },

  // Слоты для чётных дней (например, 24 октября в макете MAN CAVE)
  slotsEvenDay: [
    { time: "11:30", available: true },
    { time: "12:30", available: false },
    { time: "14:00", available: true },
    { time: "15:00", available: false },
    { time: "16:30", available: true },
    { time: "18:00", available: true },
    { time: "19:30", available: true },
    { time: "21:00", available: true },
  ],

  // Слоты для нечётных дней (23, 27 октября)
  slotsOddDay: [
    { time: "11:30", available: true },
    { time: "12:30", available: true },
    { time: "14:00", available: false },
    { time: "15:00", available: true },
    { time: "16:30", available: false },
    { time: "18:00", available: true },
    { time: "19:30", available: true },
    { time: "21:00", available: true },
  ],
};