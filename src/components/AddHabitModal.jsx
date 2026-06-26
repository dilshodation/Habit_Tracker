import style from './AddHabitModal.module.css'
import { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

function AddHabitModal({closeModal}) {
  const { habit, setHabit, addHabitModal,translation,t, changeLanguage,setChangeLanguage } = useContext(UserContext)

  const [inp, setInpValue] = useState(``)
  const [colorBt, setcolorBt] = useState(``)
  const [iconBt, setIconBt] = useState(``)
  const [dayBt, setDayBt] = useState(``);
  const[dayInp,setDayInp] = useState(``)


  const colors = [
    {
      id: 1,
      colorName: '#EF4444'
    },
    {
      id: 2,
      colorName: '#3B82F6'
    },
    {
      id: 3,
      colorName: '#22C55E',
    },
    {
      id: 4,
      colorName: '#7B61FF',
    },
    {
      id: 5,
      colorName: '#FACC15',
    },
    {
      id: 6,
      colorName: '#F97316'
    }
  ];


  const icons = [
    {
      id: 1,
      iconName: '🏋️',
    },
    {
      id: 2,
      iconName: '🏃',
    },
    {
      id: 3,
      iconName: '📚',
    },
    {
      id: 4,
      iconName: '💧',
    },
    {
      id: 5,
      iconName: '🧘',
    },
    {
      id: 6,
      iconName: '📝',
    },
    {
      id: 7,
      iconName: '🧠',
    },
    {
      id: 8,
      iconName: '🎨',
    },
    {
      id: 9,
      iconName: '🧹',
    },
    {
      id: 10,
      iconName: '🎸',
    },
    {
      id: 11,
      iconName: '🗑️',
    },
    {
      id: 12,
      iconName: '➕'
    },
  ]

  const days = [
    {
      id: 1,
      dayName: t.evdy,
      num: 365
    },
    {
      id: 2,
      dayName: t.dywee,
      num : 3
    },
    {
      id: 3,
      dayName: t.week,
      num : 7
    }
  ]
  return (
    <div className={style.addHabitModalDiv}>
      <div className={style.headerDiv}>
        <h1>{t.crtHbt}</h1>
        <button onClick={closeModal} className={style.xButton}>X</button>
      </div>
      <div className={`${style.habitNameDiv} ${style[addHabitModal]}`}>
        <h2>{t.hbtNm} </h2>
        <input value={inp} type="text" placeholder={t.rdBk}
          onChange={(e) => {

            setInpValue(e.target.value)
          }} />
      </div>
      <h2>{t.icCol}</h2>
      <div className={style.iconButtonDiv}>
        {
          icons.map((icon) => (
            <button key={icon.id} className={style.iconButton}
              onClick={() => {
                setIconBt(icon.iconName)
              }}
            > {icon.iconName} </button>
          ))
        }
      </div>
      <nav className={style.colorButtonDiv}>
        {
          colors.map((color) => (
            <button key={color.id}
              className={style.colorButton}
              style={{ backgroundColor: color.colorName }}
              onClick={(e) => {
                setcolorBt(color.colorName)
              }}>


            </button>
          ))
        }
      </nav>
      <h2>{t.rpt}</h2>
      <div className={`${style.repetitionDiv} ${style[addHabitModal]}`}>
        <section>
          {
            days.map((day) => (
              <button
                className={style.repetitionButton}
                key={day.id}
                onClick={() => { setDayBt(day.num) }}
              >
                {day.dayName}
              </button>
            ))
          }
          <input className={style.dayInp} onChange={(e)=>{
            setDayInp(e.target.value)
          }} type="text" />
        </section>
      </div>
      <div className={style.cancelSaveButtonsDiv}>
        <button className={style.cancelButton}
          onClick={() => {
            setInpValue(``)
            setDayBt(``)
            setDayInp(``)
            setIconBt(``)
            setcolorBt(``)
            closeModal()

          }}
        >{t.canc}</button>
        <button className={style.saveButton}

      
          onClick={() => {
            let finalDay = ()=>{
              if(dayInp){
               return dayInp
              }else{
               return dayBt
              }
            }
            
            if (inp !== `` && (dayBt !== ``|| dayInp !== ``) && iconBt !== `` && colorBt !== ``) {
              setHabit([...habit, {
                id: Date.now(),
                name: inp,
                day: finalDay(),
                percent: 0,
                habitStickers: iconBt,
                habitBgColor: colorBt,
                dates:[]

                
  
              }])
              setInpValue(``)
              setDayBt(``)
              setDayInp(``)
              setIconBt(``)
              setcolorBt(``)
              closeModal()
            } else {
              alert(`${t.fullInf}`)
            }

          }}
        >{t.sav}</button>
      </div>
    </div>
  )
}
export default AddHabitModal
