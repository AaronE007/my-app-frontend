import React from 'react'

const Home = ({foodImage}) => {
  return (
    <div>
      <img style={{width: "20%", magrin:"25px 50px 25px", align: "center"}} src={foodImage} alt="Several delicious foods" />
    </div>
  )
}

export default Home

