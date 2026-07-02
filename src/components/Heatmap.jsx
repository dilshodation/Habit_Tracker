// src/components/Heatmap.jsx
import React from 'react';
import { useContext } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css'; 
import { UserContext } from '../UserContext';
import styles from './Heatmap.module.css'; // Module stillarni import qilish

export default function Heatmap() {
  const bugun = new Date();
  const{heatmap,t, translation, changeLanguage, setChangeLangugae} = useContext(UserContext)
  const data = [
    { date: '2026-04-01',  count: 1 },
    { date: '2026-04-15', count: 3 },
    { date: '2026-04-30', count: 4 },
  ];

  return (
    <div className={`${styles.heatmapContainer} ${styles[heatmap]}` }>
      <h3 className={styles.heatmapTitle}>{t.htmp}</h3>
      
      <CalendarHeatmap
        startDate={new Date('2026-01-01')}
        endDate={bugun}
        values={data}
        classForValue={(value) => {
          if (!value) return 'color-empty';
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
}