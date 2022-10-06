import { render } from "@testing-library/react"
import {useState, useEffect} from "react"
import {BsFillCaretDownFill, BsFillCaretUpFill} from  "react-icons/bs"
import finHub from "../API/finHub"

export const StockList = () => {
    const [stock , setStock] = useState([])
    const [watchList, setWatchList]= useState(["GOOGL","MSFT","AMZN"])

    const changeColor = (change) => {
        return change > 0 ? "success": "danger"
    }

    const renderIcon = (change) => {
        return change > 0? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>
    }
    
    useEffect(()=> {
        let isMounted = true
        const fetchData = async () =>{
            const responses =[]
            try{
            
          const responses =  await Promise.all(watchList.map((Stock) =>{
            return finHub.get("/quote", {
                params: {
                    symbol: Stock
                }
            })

          }))
            
            console.log(responses)
               const data = responses.map((response) =>{
                return{
                    data: response.data,
                    symbol:response.config.params.symbol
                }
               })   

             console.log(data)
            if (isMounted){
                setStock(data)

            }
           

            }catch (err){

        } 

        }
        fetchData()
        return()=> (isMounted =false)
    }, [])
    
    
    
    return <div>
        <table className="table hover mt-5">
            <thead style={{color: "rgb(79,89,102)"}}>
           <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">pclose</th>
           </tr>
            </thead>
            <tbody>
                {stock.map((stockData)=>{
                    return (
                        <tr className="table-row" key= {stockData.symbol}>
                            <th scope="row">{stockData.symbol}</th>
                            <td>{stockData.data.c}</td>
                            <td className= {`text-${changeColor(stockData.data.d)}`}   >{stockData.data.d}{renderIcon(stockData.data.dp)}</td>
                            <td className= {`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp}{renderIcon(stockData.data.dp)}</td>
                            <td>{stockData.data.h}</td>  
                            <td>{stockData.data.l}</td> 
                            <td>{stockData.data.o}</td>
                            <td>{stockData.data.pc}</td> 

                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>

}