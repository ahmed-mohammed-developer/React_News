import React, { useEffect, useState } from 'react'
import './Maintop.css'
import noImg from '../../assets/img/no-img.png'
import axios from 'axios'


const Maintop = () => {

    const [headline, setHeadline] = useState(null);
    const [news, setNews] = useState([]);
    
    useEffect(() => {
      const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=ar&apikey=71c6e5f5aecc125b3a617f2c9a3f6b38`;
      const response = await axios.get(url);
      const fetchedNews = response.data.articles;
      
      fetchedNews.forEach((article) => {
        if(!article.image){
          article.image = noImg
        }
      })

      setHeadline(fetchedNews[2]);
      setNews(fetchedNews.slice(3, 7))
      }
      fetchNews()
    }, [])
  return (
    <div className='Maintop' id='general'>
      {headline && (
         <div className="container-fluid padding-size">
         <div className="row">
           <div className="col-lg-7 col-md-12">
             <a href={headline.url}>
             <div className="main-title">
               <img src={headline.image  || noImg} alt={headline.title} />
               <h1>{headline.title}</h1>
             </div>
             </a>
           </div>
           <div className="col-lg-4 col-sm-12">
           {news.map((article, index) => (
             <a href={article.url}>
                <div key={index} className="row marginTopBo">
               <div className="col-lg-4 col-md-5 col-sm-6 leftSection">
               <img src={article.image || noImg} alt={article.title} />
               </div>
               <div className="col-lg-8 col-md-7 col-sm-6 leftSectionText">
               <h2>{article.title}</h2>
               </div>
             </div>
             </a>
           ))}
           </div>
         </div>
       </div>
      )}
   
  </div>
  )
}


export default Maintop