import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Mobility Assistant</title>
        <meta property="og:title" content="National Mobility Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
