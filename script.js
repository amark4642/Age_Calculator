const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
document.getElementById("myButton").addEventListener("click", display );
function display()
{
    const inputDate=document.getElementById("input1").value;
    const inputDate1=document.getElementById("input2").value;
    // console.log(inputDate);
    // console.log(typeof(inputDate));
    var temp1=new Date(inputDate);
    var day1=temp1.getDate();
    var month1=temp1.getMonth()+1;
    var year1=temp1.getFullYear();
    var temp2=new Date(inputDate1);
    var day2=temp2.getDate();
    var month2=temp2.getMonth()+1;
    var year2=temp2.getFullYear();

    // console.log("day ="+day2);
    // console.log("month="+month2);
    // console.log("year="+year2);
    // console.dir(temp);
    if(day1>day2)
    {
        day2 = day2 + month[month1 - 1];
        month2 = month2 - 1;
    }

    if(month1>month2)
    {
        year2 = year2 - 1;
        month2 = month2 + 12;
    }

    var calculated_date = day2 - day1;
    var calculated_month = month2 - month1;
    var calculated_year = year2 - year1;

    document.getElementById("result").textContent=`Your age is : ${calculated_year} years , ${calculated_month} months and ${calculated_date} days.`
    
}
