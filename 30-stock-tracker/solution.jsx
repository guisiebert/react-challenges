import React from "react"

export default function Stock({stock}) {   
    
    const {stockName, logo, currentPrice, prevClosingPrice} = stock
    const numericalChange = (currentPrice - prevClosingPrice).toFixed(2)
    const rateChange = ((numericalChange / prevClosingPrice) * 100).toFixed(2)
    let colorClass
    let arrow 
    
    if (rateChange > 0) {
        colorClass = "green"
        arrow = "⬆"
    } else if (rateChange < 0) {
        colorClass = "red"
        arrow = "⬇"        
    } else {
        colorClass = undefined 
        arrow = "▬"
    }
    

    return (
        <div className="stock-container">
                <div className={colorClass}>
                    <p>{arrow}{numericalChange}</p>
                    <p>{rateChange}%</p>
                </div>
                <div>
                    <img className="logo" src={logo} />
                </div>
                <div> 
                    <p>{stockName}</p> 
                </div>
                <div>
                    <p>${currentPrice.toFixed(2)}</p>
                    <p>Current Price</p>
                </div>
                <div>
                    <p>Previous Close: ${prevClosingPrice}</p>
                </div>       
        </div>   
    )
}
