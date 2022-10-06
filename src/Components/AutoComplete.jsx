import{useState, useEffect, useContext} from "react"
import finHub from "../API/finHub"
import { WatchListContext } from "../Context/WatchListContext"

export const AutoComplete = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const {addStock} = useContext(WatchListContext)

    const renderDropdown = ()=> {
        const dropDownClass = search ? "show" : null
        return (
            <ul style = {{
                height: "500px",
                overflowY: "scroll",
                overflowx: "hidden",
                cursor: "pointer"

            }}className= {`dropdown-menu ${dropDownClass}`}>
                {results.map((result)=>{
                    return (
                        <li onClick={() => addStock(result.symbol)} key = {result.symbol} className="dropdown-item">{result.description}({result.symbol})

                        </li>
                    )
                })}

            </ul>
        )  
    }
    
    useEffect(() =>{
        let isMounted = true
        const fetchData = async () =>{
            try{
                const response = await finHub.get("/search",{
                    params: {
                        q: search
                    }
                })
                
                if (isMounted){

                    setResults(response.data.result)

                }
                

            }catch(err){

            }
        }
        if (search.length > 0){
            fetchData()
        }else {
            setResults([])
        }
        return () => (isMounted = false)
    }, [search])

   



    return <div  className="w-50 mt-5 rounded mx-auto" > 
    <div className="form-floating dropdown">
        <input style={{backgroundColor: "rgba(145, 158, 171, 0.04)"}} id="search"  type="text" className="form-control" placeholder="search"  autoComplete="off" value={search} onChange= {(e) => setSearch(e.target.value)}>
            
            </input>
            <label htmlFor="search">Search</label>
                   {renderDropdown()}

    </div>
     
    </div>
}