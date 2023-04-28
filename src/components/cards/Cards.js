import React from 'react'

const Cards = ({ foodData }) => {
  return (
    <>
    <section className="main-card--cointainer">
      {foodData.map((curElem) => {
        return(
          <>           
             <div className="foodcard-container" key={curElem.id}>
                <div className="Foodcard ">
                  <div className="Foodcard-body">
                  <img src={curElem.image} alt="images" className="card-media" />
                    <h2 className="card-amount"> {curElem.amount} </h2>
                    <span className="card-itemname">
                    {curElem.itemname}
                    </span>                    
                  </div>
                  {/* <span className="card-tag  subtle"> 
                    <button onClick={() => {
                     window.location.href = "/Contactnow";}}>
                      Contact Now
                    </button>
                  </span> */}
                </div>
              </div>
          </>
      )
      })}
     </section>
    </>
  )
}
export default Cards;