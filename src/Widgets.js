import React from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

const Widgets =()=> {
  const newsArticle=(heading,subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecord/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info/>
      </div>
      {newsArticle("Isreal-Palestine conflict", "Top news-999999 readers")}
      {newsArticle("Another virus started spreading", "Top news-76999 readers")}
      {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $55k", "Crypto - 8000 readers")}
        {newsArticle("React v.17 is here!", "Code - 123 readers")}
    </div>
  )
}

export default Widgets;
