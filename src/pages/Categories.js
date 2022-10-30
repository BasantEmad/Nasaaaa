import React, { useEffect ,useState }  from "react";
import "../styles/Categories.css";
import Cards from '../components/Cards';

import axios from "axios";



export default function Catagories() {



  const [apiData , setApiData]=useState([]);


  

 // reduced the range, because the request was timing out most of the time
 const startDate = new Date("2022-01-01T08:28:41.917Z");
 // endDate was errorring between 12:00am and 1:00am, with a message you have to use date between ${some_date_in_1980} and Mar 16, 2022. But It disappeard after 1:00am
 const endDate = new Date();
 

  useEffect(()=>{

    const url = `https://api.nasa.gov/planetary/apod?api_key=SwztjsqWJfgzjWRGJmwbhEGjEaMLVyHXy7iclefS&count=9`
    axios.get(url) .then(function (response) {
      // handle success
     
        setApiData(response?.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  },[])


  return (
   
    <div>

      <Cards nasaData={apiData}/>

     </div>

  )
}


