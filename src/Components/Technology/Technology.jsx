import React from 'react'
import './Technology.css'
import img1 from '../../assets/img/img-1.jpg'



const Technology = () => {
  return (
    <div className='Technology'>
      <div className="container-fluid padding-size">
        <div className="titleTech d-flex align-items-start">
        <i className='bx bxs-bookmark ms-1'></i>
        <h1 className='ms-1 TechnologyTitle'>التقنية</h1>
        <i className='bx bx-chevron-left'></i>
        </div>
      </div>
      <div className="container-fluid padding-sizq">
        <div className="row">
            <div className="col-md-3 col-sm-6 techddes">
                <img src={img1} alt="" />
                <h2>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h2>
            </div>
            <div className="col-md-3 col-sm-6 techddes">
                <img src={img1} alt="" />
                <h2>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h2>
            </div>
            <div className="col-md-3 col-sm-6 techddes">
                <img src={img1} alt="" />
                <h2>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h2>
            </div>
            <div className="col-md-3 col-sm-6 techddes">
                <img src={img1} alt="" />
                <h2>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
