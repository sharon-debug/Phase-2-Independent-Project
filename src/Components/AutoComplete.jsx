import{useState, useEffect} from "react"
import finHub from "../API/finHub"

export const AutoComplete = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const renderDropdown = ()=> {
        const dropDownClass = search ? "show" : null
        return (
            <ul cclassName= {`dropdown-menu ${dropDownClass}`}>

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

                    setResults(response.data.results)

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
<ul className="dropdown-menu">
    <li>stock1</li>
    <li>stock2</li>
    <li>stock3</li>
</ul>

    </div>
     
    </div>
}