// console.log("hello");

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
document.getElementById("myButton").addEventListener("click", display);
function display() {
    const inputDate = document.getElementById("input1").value;
    const inputDate1 = document.getElementById("input2").value;
    // if(inputDate===NaN)
    //     {
    //         document.getElementById("result").textContent = "Please enter some dates !";
    //         return;
    //     }
    var temp1 = new Date(inputDate);
    var day1 = temp1.getDate();
    var month1 = temp1.getMonth() + 1;
    var year1 = temp1.getFullYear();
    var temp2 = new Date(inputDate1);
    var day2 = temp2.getDate();
    var month2 = temp2.getMonth() + 1;
    var year2 = temp2.getFullYear();
    
    // if(day2<=0)
    // {
    //     document.getElementById("result").textContent = "Please enter some dates !";
    //     return;
    // }

    // var check = new Date();

    // if (year1 > check.getFullYear() || year1 === check.getFullYear() && month1 > check.getMonth() || year1 === check.getFullYear() && month1 === check.getMonth() && day1 > check.getDate()) {
    //     document.getElementById("result").textContent = "Don't be a Time Traveller!  Please enter correct D.O.B ";
    // }
    // else {


        if (day1 > day2) {
            day2 = day2 + month[month1 - 1];
            month2 = month2 - 1;
        }

        if (month1 > month2) {
            year2 = year2 - 1;
            month2 = month2 + 12;
        }

        var calculated_date = day2 - day1;
        var calculated_month = month2 - month1;
        var calculated_year = year2 - year1;

        if(isNaN(calculated_date))
        {
            document.getElementById("result").textContent = "Please enter a valid date !";
            return;
        }
        
        if(calculated_date<0 || calculated_month<0 || calculated_year<0)
        {
            document.getElementById("result").textContent = "Don't be a Time Traveller!  Please enter your correct D.O.B ";
        }
        else 
        document.getElementById("result").textContent = `Your age is : ${calculated_year} years , ${calculated_month} months and ${calculated_date} days.`
}
