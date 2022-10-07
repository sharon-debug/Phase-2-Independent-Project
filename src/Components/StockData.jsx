import { useState,useEffect} from "react";
import finHub from "../API/finHub";

export const StockData = ({symbol})=>{
      const [StockData , setStockData] = useState()
    let isMounted = true;
    useEffect(() => {
        const fetchData = async () => {
            try{
          const response = await finHub.get("/stock/profile2",{
            params: {
                symbol
            }
          })
          console.log(response)
          if (isMounted){
            setStockData(response.data)
          }
            } catch (err){
                console.log(err)

            }
        }  
        fetchData()
        return() => (isMounted = false);
    },[symbol])
    return <div>
        {StockData && (
            <div className="row border bg-white rounded shadow-sm p-4 t-5">
                <div className="Col"></div>
                <div>
                    <span className="fw-bold"> country: </span>
                    {StockData.country}
                </div>
                <div>
                    <span className="fw-bold">currency: </span>
                    {StockData.currency}

                </div>
                <div>
                    <span className="fw-bold">exchange: </span>
                    {StockData.exchange}
                </div>
                <div className="Col"></div>
                <div>
                    <span className="fw-bold">finnhubIndustry: </span>
                    {StockData.finnhubIndustry}
                </div>
                <div>
                    <span className="fw-bold">ipo: </span>
                    {StockData.ipo}
                </div>
                <div>
                    <span className="fw-bold">marketCapitalization: </span>
                    {StockData.marketCapitalization}
                </div>
                <div className="col"></div>
                <div>
                    <span className="fw-bold"> name: </span>
                    {StockData.name}
                </div>
                <div>
                    <span className="fw-bold">shareOutstanding: </span>
                    {StockData.shareOutstanding}
                </div>
                <div>
                    <span className="fw-bold">ticker: </span>
                    {StockData.ticker}
                </div>
                <div>
                    <span className="fw-bold">weburl: </span>
                  <a href={StockData.weburl}>{StockData.weburl}</a>
                </div>
              </div>
             
        )}
    </div>
}