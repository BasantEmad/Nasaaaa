const NASA_KEY = process.env.REACT_APP_API_KEY;

// Expects a js Date, returns a string in YYYY-MM-DD format


export function transformDateForAPIRequest(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}

 export function dateDiff(dateValue){
  const date1 = new Date(dateValue);
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil (diffTime / (1000 * 60 * 60 * 24))-1; 

return diffDays;
}

export function getNASAPictures(startDate, endDate) {


    try {
   

   }catch(err){

   }
}

