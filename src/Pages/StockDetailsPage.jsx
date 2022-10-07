
import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import finHub from "../API/finHub"
//import { StockChart } from "../Components/StockChart"


//const formatData = (data)=>{
  //  return data.t.map((el, index) =>{
  //      return{
    //        x: el*1000,
      //      y: data.c[index]
        //}
    //})
//}

export const StockDetailsPage = () => {
    const {symbol} = useParams()
    useEffect(() => {
         const fetchData = async ()=> {
          const date= new Date()
          const currentTime = new Date().getTime()/10000000;
          console.log(date);
            const currentTime = Math.floor(date.getTime()/1000)
            const oneDay = currentTime -3* 24* 60 * 60
            const response = await finHub.get("/stock/candle",{
                params: {
                    symbol,
                    from: oneDay,
                    to : currentTime,
                    resolution : 30
                }
            })
            console.log(response)
         }
        fetchData()
    }, [])
    return <div>StockDetailsPage {symbol}</div>
}
  //  const [chartData , setChartData] = useState()
    //const { symbol} = useParams()
    //useEffect(() => {
      //  const fetchData = async ()=> {
        //    const date = new Date
          //  const currentTime = Math.floor(date.getTime()/1000)
            //let oneDay;
            //if (date.getDay() === 6){
              //  oneDay =currentTime -2*24*60*60;
            //}else if (date.getDate()=== 0){
              //  oneDay =currentTime -3*24*60*60;
            //}else{
              //  oneDay =currentTime -24*60*60;
            //}
           //const oneWeek = currentTime -7*24*60*60;
         //const  oneYear = currentTime -365*24*60*60;
           //try{
            //const responses = await Promise.all([finHub.get("/stock/candle",{
            //params: {
              //  symbol,
                //from: oneDay,
                //to: currentTime,
                //resolution: 30
            //}

       //}),finHub.get("/stock/candle",{
         //  params: {
           //   symbol,
             //  from: oneWeek,
               //to: currentTime,
                //resolution: 60
            ///}

        //}),finHub.get("/stock/candle",{
          // params: {
            //   symbol,
              // from:oneYear,
               //to: currentTime,
              //resolution: "w"
            //}

        //})])
        //console.log(responses)
        //setChartData({
          //  day: formatData(responses[0].data),
            //week:formatData(responses[2].data),
           //year:formatData(responses[3].data)
           //})

         // }catch(err){
           // console.log(err)

           //}

          
            
           
            

//        }
  //      fetchData()
   //}, [symbol])

   // return <div>

     //   {chartData && (
       //     <div>
              //  <StockChart chartData= {chartData} symbol = {symbol}/>
         //   </div>
        //)}
    //</div>
//}