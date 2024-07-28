import React from 'react'
import './Header.css'

const Header = () => {
  // إنشاء كائن Date للتاريخ الحالي
let date = new Date();

// الأيام باللغة العربية
const weekdays = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const day = date.getDay(); // رقم اليوم (0-6)
const arabicDay = weekdays[day];

// الشهور باللغة العربية
const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const month = date.getMonth(); // رقم الشهر (0-11)
const arabicMonth = months[month];

// السنة
const year = date.getFullYear();

  return (
    <div className='header'>
      <div className="container-fluid date-time-background">
        <div className="row">
          <div className="col-sm-12">
          <div className="date-time">
      <span>{`اليوم : ${arabicDay} - `}</span>
      <span>{`التاريخ : ${date.getDate()} ${arabicMonth} ${year}`}</span>
      </div>
          </div>
        </div>
      </div>
      <div className="container-fluid padding-size">
       <div className="row">
        <div className="d-flex justify-content-between align-items-center">
        <div className="logo-search" >
          <h2 className="logo">حول العالم</h2>
        </div>
        <div className="search">
        <form>
        <i class='bx bx-search'></i>
          <input type="text" placeholder='بحث' />
        </form>
        </div>
        </div>
       </div>
      </div>
      <div className="container-fluid padding-size">
      <div className="navbar justify-content-around   boreder-1">
        <ul className='nav-ul d-flex'>
          <li className="a"><a href="#general">أخبار عامة</a></li>
          <li className="a"><a href="#sport">الرياضة</a></li>
          <li className="a"><a href="#tech">التقنية</a></li>
          <li className="a"><a href="#bus">الأعمال</a></li>
          <li className="a"><a href="#sci">العلوم</a></li>
          <li className="a"><a href="#hea">الصحة</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header
