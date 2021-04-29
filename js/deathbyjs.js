//STEP 1
/*function alphabetOrder(str) {

    return str.split('').sort().join('');
  }
console.log(alphabetOrder("alphabet"));*/

//STEP 2
/*function uppercase(string) {
  var array1 = string.split(' ');
  var newarray1 = [];
  var i;
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));*/

//STEP 3
/*function vowelCount(str1) {
  var vowelList = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var i = 0; i < str1.length ; i++)
  {
    if (vowelList.indexOf(str1[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowelCount("The quick brown fox"));*/

//STEP 4
/*function makeid(l) {
    var text = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i=0; i < l; i++ ) {  
        text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
}
console.log(makeid(8));*/

//STEP 5
function LongestCountryName(countryName) {
  return countryName.reduce(function(lname, country) {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(LongestCountryName(["Australia", "Germany", "United States of America"]));
