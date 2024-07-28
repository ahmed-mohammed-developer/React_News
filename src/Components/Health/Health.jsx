import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Health = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=health&lang=ar&apikey=71c6e5f5aecc125b3a617f2c9a3f6b38`;
    const response = await axios.get(url);
    const fetchedNews = response.data.articles;
    
    setNews(fetchedNews.slice(5, 9))
    }
    fetchNews()
  }, [])
  
  return (
    <div className='Word' id='hea'>
      <div className="container-fluid padding-size">
        <div className="titleWord d-flex align-items-start">
        <i className='bx bxs-bookmark ms-1'></i>
        <h1 className='ms-1 text-body-tertiary'>الصحة</h1>
        <i className='bx bx-chevron-left'></i>
        </div>
      </div>
      <div className="container-fluid padding-sizq">
        <div className="row">
        {news.map((article, index) => (
            <div key={index} className="col-md-3 col-sm-6 worddes">
                <img src={article.image} alt={article.title} />
                <h2>{article.title}</h2>
            </div>
             ))}
        </div>
      </div>
    </div>
  )
}

export default Health
