import React from 'react'
import './Footer.css'


// الحصول على السنة الحالية
const currentYear = new Date().getFullYear();

// إنشاء النص الديناميكي
const copyrightText = `جميع الحقوق محفوظة ${currentYear}`;




const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container-fluid date-time-background">
        <div className="row">
          <div className="col-sm-12">
          <div className="date-time">
      <span>{copyrightText}</span>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
