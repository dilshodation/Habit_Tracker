// src/components/MonthlyCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './MonthlyCalendar.module.css';
import { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function MonthlyCalendar() {
  const [date, setDate] = useState(new Date());

  const {calendar,habit} = useContext(UserContext)
 
  const habitData = {}

habit.forEach((item) => {
  item.dates.forEach((date) => {
    if (!habitData[date]) {
      habitData[date] = []
    }

    habitData[date].push(item.habitBgColor)
  })
})

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // return ${year}-${month}-${day};
  return `${year}-${month}-${day}`;
};

  const renderTileContent = ({ date, view }) => {
    if (view === 'month') {
      const sanaString = formatDate(date)
      // const sanaString = date.toISOString().split('T')[0];
      const kunlikOdatlar = habitData[sanaString];

      if (kunlikOdatlar) {
        return (
          <div className={styles.dotContainer}>
            {kunlikOdatlar.map((color, index) => (
              <span 
                key={index} 
                className={styles.dot} style={{backgroundColor: color}}
              />
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className={`${styles.calendarContainer} ${styles[calendar]}`}>
      <Calendar
        onChange={setDate}
        value={date}
        showDoubleView={true} 
        tileContent={renderTileContent} 
        locale="en-US"
      />
    </div>
  );
}