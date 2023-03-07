import React from 'react'

function Intro() {
    return (
        <div className='bg-dark text-white justify-content-center pt-4 pb-4 px-5 py-5'
         style={{
            alignItems: "center",
            padding: " 0px",
            margin: "20px",
            height: "600px",
            backgroundColor: "black",
            borderRadius: "5px"
            
         }}
        >
            <h2 className='pt-4 pr-4' >Investing with Artficial Intelligent models</h2>
            <p className='ml-8 mr-8 '>
                
                    AI stock trading uses robo-advisors to analyze millions of data points
                    and execute trades at the optimal price. AI traders also analyze forecast
                    markets with greater accuracy and trade firms efficiently which mitigate
                    risks and provide higher returns

            </p>
            <p>
                    Artificial intelligence models can predict the changing volatility patterns
                    and market regimes to inform the asset allocation model better to safeguard
                    capital. Extracting Alternative Information – An exciting new area of investing
                    where AI plays a significant role in extracting information from unstructured
                    data
                
            </p>
        </div>
    )
}

export default Intro