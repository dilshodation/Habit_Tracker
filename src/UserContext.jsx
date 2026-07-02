import js from "@eslint/js";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext();
function Provider({ children }) {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState([]);
  const [ThisUser, setThisUser] = useState();
  let [habit, setHabit] = useState([]);
  const [asideNavbarTheme, setAsideNavbarTheme] = useState(``)
  const [aTheme, setAtheme] = useState(``)
  const [heatmap, setHeatmap] = useState(``)
  const [calendar, setCalendar] = useState(``)
  const [dashboard, setDashboard] = useState(``)
  const [stats, setStats] = useState(``)
  const [addHabitModal, setAddHabitModal] = useState(``);
  const [setting, setSetting] = useState(``)
  const [changeLanguage, setChangeLanguage] = useState(`English`)

  // foydalanuvchi sahifani yangilaganda , ma'lumotlar o'chib ketmasligi uchun
  useEffect(() => {
    const getFromSessionStorage = sessionStorage.getItem(`ddd`);
    setThisUser(JSON.parse(getFromSessionStorage))
  }, [])
  //////////////////////////////////////////////////////////////////////////////////

  // habitarni olish uchun
  useEffect(() => {
    if (!ThisUser) return

    const userKey = `userKey ${ThisUser.id}`

    const data = localStorage.getItem(userKey)
    if (data) {
      setHabit(JSON.parse(data))
    } else {
      setHabit([])
    }
  }, [ThisUser])

  // ==================================open===========================================


  useEffect(() => {
    if (!ThisUser) return

    const userKey = `keyTheme_${ThisUser.id}`
    const data = localStorage.getItem(userKey)
    if (data) {
      const allThemes = JSON.parse(data)
      setAsideNavbarTheme(allThemes.asideNavbarTheme || ``);
      setAtheme(allThemes.aTheme || ``);
      setHeatmap(allThemes.heatmap || ``);
      setCalendar(allThemes.calendar || ``);
      setDashboard(allThemes.dashboard || ``);
      setStats(allThemes.stats || ``);
      setAddHabitModal(allThemes.addHabitModal || ``)
      setSetting(allThemes.setting || ``)

    } else {
      setAsideNavbarTheme(``)
      setAtheme(``)
      setHeatmap(``)
      setCalendar(``)
      setAddHabitModal(``)
      setSetting(``)
    }

  }, [ThisUser])
  // ====================================close=========================================

  useEffect(() => {
    if (!ThisUser) return
    const userKey = `userKey ${ThisUser.id}`
    localStorage.setItem(userKey, JSON.stringify(habit))
  }, [habit])

  // =======================================open======================================


  useEffect(() => {
    if (!ThisUser) return
    const userKey = `keyTheme_${ThisUser.id}`
    const allThemes = {
      asideNavbarTheme,
      aTheme,
      heatmap,
      calendar,
      dashboard,
      stats,
      addHabitModal,
      setting
    }
    localStorage.setItem(userKey, JSON.stringify(allThemes))

  }, [asideNavbarTheme, aTheme, heatmap, calendar, dashboard, stats, addHabitModal, setting]
  )


  // ======================================close=======================================
  useEffect(() => {
    if (!ThisUser) return
    const userKey = `keyLanguage${ThisUser.id}`
    const data = localStorage.getItem(userKey)
    if (data) {
      setChangeLanguage(data)
    }
  }, [ThisUser])

  /////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (!ThisUser) return
    const userKey = `keyLanguage${ThisUser.id}`

    localStorage.setItem(userKey, changeLanguage)

  }, [changeLanguage]
  )
  /////////////////////////////////////////////////////////////////////////
  function editPercent(id, newPercent) {
    const sanaString = new Date().toISOString().split('T')[0];
    // console.log(sanaString)
    let updateHabit = habit.map((e) => {


      if (e.id === id) {

        if (e.dates.includes(sanaString)) {

          return { ...e, percent: newPercent }
        }
        else {
          return {
            ...e,
            percent: newPercent,
            dates: [...e.dates, sanaString]
          };
        }
      }

      return e


    })
    setHabit(updateHabit)
  }
  /////////////////////////////////////////////////////////////////////////


  function toggleHabit(id) {
    const today = new Date().toISOString().split("T")[0]

    const updated = habit.map((item) => {
      if (item.id === id) {
        const exists = item.dates.includes(today)

        const newDates = exists
          ? item.dates.filter((d) => d !== today)
          : [...item.dates, today]

        return {
          ...item,
          dates: newDates
        }
      }

      return item
    })

    setHabit(updated)
  }
  /////////////////////////////////////////////////////////////////////////


  function registerFunc(inpId, input1, input2, input3, input4) {

    setInputs([...inputs, {
      id: inpId,
      name: input1,
      email: input2,
      password: input3,
      telephoneNumber: input4
    }])
  }

  /////////////////////////////////////////////////////////////////////////


  function changeTheme() {
    if (asideNavbarTheme === '' || aTheme === '' || heatmap === `` || calendar === `` || dashboard === `` || stats === `` || addHabitModal === `` || setting === ``) {
      setAsideNavbarTheme('BgColor')
      setAtheme(`aTheme`)
      setHeatmap(`heatmapTheme`)
      setCalendar(`calendarTheme`)
      setDashboard(`dashboardTheme`)
      setStats(`statsTheme`)
      setAddHabitModal(`addHabitModalTheme`)
      setSetting(`settingTheme`)

    }
    else {
      setAsideNavbarTheme('')
      setAtheme(``)
      setHeatmap(``)
      setCalendar(``)
      setDashboard(``)
      setStats(``)
      setAddHabitModal(``)
      setSetting(``)
      // setgbBTN('')

    }
  }
  /////////////////////////////////////////////////////////////////////////

  function LogoutFunc() {

    sessionStorage.removeItem(`ddd`)
    setThisUser(``)
    navigate('/')



  }
  /////////////////////////////////////////////////////////////////////////



  const translation = {
    English: {
      title: `Setting`,
      p1: `Manage your preferences and account`,
      p2: `Choose your preferred appearance`,
      p3: `Select your preferred language`,
      p4: `Sign out from your account`,
      theme: `Theme`,
      language: `Language`,
      logout: `Logout`,
      dayStr: `days streak`,
      myOver: `My Overview`,
      totHab: `Total Habits`,
      longstr: `Longest Streak`,
      spn: `Add a new Habit`,
      compl: `Completion`,
      actHab: `Active Habits`,
      thsMon: `This month`,
      crtHbt: `Creating a New Habit`,
      rdBk: `For example: Reading a book`,
      hbtNm: `Habit Name`,
      icCol: `Choose an Icon and Color`,
      rpt: `Repetition`,
      evdy: `Every day`,
      dywee: `3 Days a week`,
      week: `Weekends`,
      canc: `Cancel`,
      sav: `Save`,
      lgin: `Log In`,
      welBa: `Welcome back, ! Please enter your credentials to access your dashboard.`,
      eAdr: `Email Adress`,
      pasw: `Password`,
      forgPasw: `Forgot Password`,
      nwUsr: `New user?`,
      crtAc: `Create your account`,
      acsAc: `Access Dashboard`,
      hbtWs: `Welcome to Habitwise`,
      imgUpl: `Upload Profile Photo Optional`,
      yrNm: `Your Name`,
      emAdr: `Email Address`,
      crtPasw: `Create Password`,
      crAc: `Create Account`,
      htmp: `Performance & Progress`,
      gdMorn: `Good Morning!`,
      gdAft: `Good Afternoon`,
      gdEve: `Good Evening`,
      jn: `January`,
      fb: `February`,
      mr: `March`,
      ap: `April`,
      my: `May`,
      jn: `June`,
      jl: `July`,
      av: `August`,
      sp: `September`,
      oct: `October`,
      nv: `November`,
      dc: `December`,
      tp0: `Write a number greater than 0`,
      anEm: `Please use another email, this email has been taken`,
      flInp: `Fill in the input`,
      crInf: `All information is correct`,
      incrInf: `The data is incorrect`,
      wntLg: `Do you want to log out?`,
      mtv: `Stay HARD!`,
      fullInf: `Write complete information.`



    },
    Uzbek: {
      title: `Sozlamalar`,
      p1: `O'zingizning afzalliklaringiz va hisobingizni boshqaring`,
      p2: `O'zingiz yoqtirgan ko'rinishni tanlang`,
      p3: `O'zingiz yoqtirgan tilni tanlang`,
      p4: `Hisobingizdan chiqing`,
      theme: `Mavzu`,
      language: `Til`,
      logout: `Chiqish`,
      dayStr: `kunlik chiziq`,
      myOver: `Mening umumiy sharhim`,
      totHab: `Umumiy odatlar`,
      longstr: `Eng uzun chiziq`,
      spn: `Yangi odat qo'shing`,
      compl: `Tugallash`,
      actHab: `Faol odatlar`,
      thsMon: `Bu oy`,
      crtHbt: `Yangi odat shakllantirish`,
      rdBk: `Masalan: Kitob o'qish`,
      hbtNm: `Odat nomi`,
      icCol: `Belgi va rangni tanlang`,
      rpt: `Takrorlash`,
      evdy: `Har kuni`,
      dywee: `Haftada 3 kun`,
      week: `Dam olish kunlari`,
      canc: `Bekor qilish`,
      sav: `Saqlash`,
      lgIn: `Tizimga kirish`,
      welBa: `Qaytib kelganingizdan xursandmiz, ! Iltimos, asboblar paneliga kirish uchun hisob maʼlumotlaringizni kiriting.`,
      eAdr: `E-pochta manzili`,
      pasw: `Parol`,
      forgPasw: `Parolni unutdingizmi `,
      nwUsr: `Yangi foydalanuvchi?`,
      crtAc: `Hisobingizni yarating `,
      acsAc: `Boshqaruv paneliga kirish`,
      hbtWs: `Habitwise-ga xush kelibsiz`,
      imgUpl: `Profil fotosuratini yuklash ixtiyoriy`,
      yrNm: `Sizning ismingiz`,
      emAdr: `E-pochta manzili`,
      crtPasw: `Parol yaratish`,
      crAc: `Hisob yaratish`,
      htmp: `Ishlash & taraqqiyot`,
      gdMorn: `Xayrli tong!`,
      gdAft: `Hayrli kun`,
      gdEve: `Hayrli kech`,
      jn: `Yanvar`,
      fb: `Fevral`,
      mr: `Mart`,
      ap: `Aprel`,
      my: `May`,
      jn: `Iyun`,
      jl: `Iyul`,
      av: `Avgust`,
      sp: `Sentyabr`,
      oct: `Oktyabr`,
      nv: `Noyabr`,
      dc: `Dekabr`,
      tp0: `0 sonidan katta son yozing`,
      anEm: `Boshqa email ishlating, bu email ishlatilgan`,
      flInp: `Inputni toldiring`,
      crInf: `Hamma Ma'lumot to'gri`,
      incrInf: `Ma'lumotlar xato`,
      wntLg: `Hisobdan chiqmoqchimisiz?`,
      mtv: `Omad!`,
      fullInf: `Toliq ma'lumot yozing`


    },
    Russian: {
      title: `Настройки`,
      p1: `Управление настройками и учетной записью`,
      p2: `Выберите понравившийся вам вариант оформления`,
      p3: `Выберите желаемый язык`,
      p4: `Выйти из учетной записи`,
      theme: `Тема`,
      language: `Язык`,
      logout: `Выйти`,
      dayStr: `подряд`,
      myOver: `Мой обзор`,
      totHab: `Общие привычки`,
      longstr: `Самая длинная серия`,
      spn: `Добавить новую привычку`,
      compl: `Завершение`,
      actHab: `Активные привычки`,
      thsMon: `В этом месяце`,
      crtHbt: `Формирование новой привычки`,
      rdBk: `Например: чтение книги`,
      hbtNm: `Название привычки`,
      icCol: `Выберите значок и цвет`,
      rpt: `Повторение`,
      evdy: `Каждый день`,
      dywee: `3 дня в неделю`,
      week: `Выходные`,
      canc: `Отменить`,
      sav: `Сохранить`,
      lgin: `Войти`,
      welBa: `Добро пожаловать обратно, ! Пожалуйста, введите свои учетные данные для входа в личный кабинет.`,
      eAdr: `Адрес электронной почты`,
      pasw: `Пароль`,
      forgPasw: `Забыли пароль?`,
      nwUsr: `Вы новый пользователь?`,
      crtAc: `Создать аккаунт`,
      acsAc: `Панель управления`,
      hbtWs: `Добро пожаловать в Habitwise`,
      imgUpl: `Загрузка фотографии профиля — необязательно`,
      yrNm: `Ваше имя`,
      emAdr: `Адрес электронной почты`,
      crtPasw: `Создать пароль`,
      crAc: `Создать аккаунт`,
      htmp: `Результаты & прогресс`,
      gdMorn: `Доброе утро!`,
      gdAft: `Добрый день`,
      gdEve: `Добрый вечер`,
      jn: `январь`,
      fb: `февраль`,
      mr: `март`,
      ap: `апрель`,
      my: `май`,
      jn: `июнь`,
      jl: `июль`,
      av: `август`,
      sp: `сентябрь`,
      oct: `октябрь`,
      nv: `ноябрь`,
      dc: `декабрь`,
      tp0: `Введите число, большее 0`,
      anEm: `Используйте другой адрес электронной почты — этот адрес уже занят`,
      flInp: `Заполните поле ввода`,
      crInf: `Вся информация верна`,
      incrInf: `Эта информация неверна`,
      wntLg: `Хотите выйти из системы?`,
      mtv: `Удачи!`,
      fullInf: `Введите необходимую информацию`

    }
  }
  const t = translation[changeLanguage]


  /////////////////////////////////////////////////////////////////////////




  return (
    <UserContext.Provider value={{ habit, setHabit, inputs, registerFunc, editPercent, ThisUser, setThisUser, changeTheme, asideNavbarTheme, aTheme, heatmap, calendar, dashboard, stats, addHabitModal, setting, LogoutFunc, toggleHabit, setChangeLanguage, changeLanguage, t, translation }}>
      {children}
    </UserContext.Provider>
  )

}



export default Provider

