//STEP 1
/*var getDaysInMonth = function(month,year) {
    return new Date(year, month+1, 0).getDate();
};
console.log(getDaysInMonth(3, 2021));*/

//STEP 2
/*var monthName = function(dt){
    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return mlist[dt.getMonth()];
    };
    console.log(monthName(new Date("4/28/2021")));*/

//STEP 3
/*var isWeekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(isWeekend('May 1, 2021'));*/

//STEP 4
/*var  today = new Date();
var yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

today.toDateString();
yesterday.toDateString();
console.log(yesterday.toDateString());*/

//STEP 5
