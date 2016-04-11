// Check to see if the users input from the prompt contains dashes at character 3 and 7 return alert valid.
// isNaN not functional
// var phoneNum = function(){
//     var num = prompt("Please enter your telephone, this will be used as SPAM and telemarketing")
   
//     if(num.charAt(3) == "-" && num.charAt(7) == "-" && isNaN(num) ){
//         return alert("that is a valid number");
// } else{var again = prompt("please enter a valid number, in the format ###-###-####");
    
//     }if (again.charAt(3) == "-" && again.charAt(7) == "-" && isNaN(num) ){
//         return alert('finally')
//     }else{
//         return alert("You Suck!")
//     }
// }
// phoneNum()

//birthday must be in the format xx/xx/xx
// var birthday = function(){
//     var format = prompt("Please Enter Your Birthday");
//     if(format.charAt(2) == "/" && format.charAt(5) == "/" && format.length === 8){
//         return alert("Thank you!")
//     }else{
//         var again = prompt("Please enter it in the format xx/xx/xx")
//     }
// }
// birthday()


//Postal code must follow format xxxxx OR xxxxx-xxxx 
// var postal = function(){
//     var code = prompt("Please Enter Your Postal Code");
//         if(code.length === 5 || code.length === 10){
//             return alert("Thanks Big Guy")
//         }else{
//             var again = prompt("Please enter the format as xxxxx or xxxxx-xxxx")
//         }       if(again.length === 5 || again.length === 10){
//                      return alert("Perfect");
//         } else{
//             return alert("I give up")
//         }
// }
// postal()


//check to see if input is a number or not.
// var check = function(x){
//     return !isNaN(parseFloat(x));
// }
// console.log(check(12))


//States, need to have an array with all states to confirm with user input. 
//to check indexOf put the var that your checking in the () and the var being compared with first.
// var state = function(){
//     var abbr = prompt("Please Enter Your State")
//     abbr=abbr.toUpperCase();
//     var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
//         if (states.indexOf(abbr) > 0 && abbr.length === 2){
//             return alert("Thanks")
//         }else{
//              var again = prompt("Please enter your state in XX format");
//         }if(states.indexOf(again) > 0){
//             alert("Finally");
//         }else{
//             alert("JEEZ")
//         }
// }
// state();

var married = function(){
   var marry = prompt("Are You Married?")
        marry = marry.toLowerCase();
        if(marry == "yes"){
            return alert("congrats!!")
        }else{
            return alert("You better get started on that man!")
        }
}
married();