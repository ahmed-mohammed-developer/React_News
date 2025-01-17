import React, { useEffect, useState } from 'react'
import img1 from '../../assets/img/img-1.jpg'
import axios from 'axios'



const Sciences = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=science&lang=ar&apikey=71c6e5f5aecc125b3a617f2c9a3f6b38`;
    const response = await axios.get(url);
    const fetchedNews = response.data.articles;
    
    setNews(fetchedNews.slice(2, 6))
    }
    fetchNews()
  }, [])
  return (
    <div className='Technology' id='sci'>
      <div className="container-fluid padding-size">
        <div className="titleTech d-flex align-items-start">
        <i className='bx bxs-bookmark ms-1'></i>
        <h1 className='ms-1 TechnologyTitle text-info-emphasis'>العلوم</h1>
        <i className='bx bx-chevron-left'></i>
        </div>
      </div>
      <div className="container-fluid padding-sizq">
        <div className="row">
        {news.map((article, index) => (
            <div key={index} className="col-md-3 col-sm-6 techddes">
              <a href={article.url}>
              <img src={article.image} alt={article.title} />
              </a>
                <h2>{article.title}</h2>
            </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Sciences
