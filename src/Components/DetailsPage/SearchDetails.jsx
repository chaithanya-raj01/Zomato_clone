import { useParams } from "react-router"
import {useState , useEffect} from "react"
import axios from "axios"
import { ZomatoNav } from "../Navbar/ZomatoNav"
import "./A.Details.css"


export const SearchDetails = () => {

    const {id} = useParams()
    const [searchData , setSearchData] = useState({})
    useEffect(() => {GetSearchData()},[])


    const GetSearchData = () => {
        axios.get(`http://localhost:8080/global/${id}`).then((res)=> setSearchData(res.data))
    }
    //console.log(searchData)

    return(

        <>
            <ZomatoNav />

            <div className="FoodDetails">

                <div><img src={searchData.imgUrl} /></div>

                <div id="FlexBoxis">
                    <h1>{searchData.name}</h1>
                    <span> Rs . {searchData.price} /-</span>
                </div>

                <p>{searchData.variety}</p>

                <div id="keyPair">
                    <span>Location : </span>
                    <p>{searchData.place}</p>
                </div>

                <div id="keyPair">
                    <span>Rating : </span> 
                    <p>{searchData.rating}</p>
                </div>

            </div>

            <div className="footerDiv">
                <Footer />
            </div>

        </>
    )
}