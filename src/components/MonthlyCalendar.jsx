// src/components/MonthlyCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Kutubxonaning asosiy stillari
import styles from './MonthlyCalendar.module.css';

export default function MonthlyCalendar() {
  const [date, setDate] = useState(new Date());

  // Test uchun odatlar ma'lumotlari (qaysi kuni qaysi odat bajarilgan)
  // 1 = qizil (workout), 2 = ko'k (read), 3 = yashil (meditate)
  const habitData = {
    '2026-04-01': [1, 2],
    '2026-04-02': [1, 3],
    '2026-04-15': [1, 2, 3],
    '2026-04-20': [2],
  };

  // Har bir kun katagining ichiga nuqtalarni joylashtirish funksiyasi
  const renderTileContent = ({ date, view }) => {
    if (view === 'month') {
      // Sanani YYYY-MM-DD formatiga o'tkazamiz
      const sanaString = date.toISOString().split('T')[0];
      const kunlikOdatlar = habitData[sanaString];

      if (kunlikOdatlar) {
        return (
          <div className={styles.dotContainer}>
            {kunlikOdatlar.map((habitId, index) => (
              <span 
                key={index} 
                className={`${styles.dot} ${styles[`habitDot${habitId}`]}`}
              />
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={setDate}
        value={date}
        showDoubleView={true} // Rasmda ko'rsatilgandek yonma-yon 2 oyni chiqaradi
        tileContent={renderTileContent} // Kunlar tagiga nuqta qo'yish
        locale="en-US"
      />
    </div>
  );
}