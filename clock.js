function clock()
{
	var d= new Date();
var date =getFormatted(d.getDate());

var month=d.getMonth();
var monthArray=["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEP","OCT","NOV","DEC"];	
month=monthArray[month];

var year=d.getFullYear();

var day=d.getDay();
var dayArray=["SUN","MON","TUES","WED","THUS","FRI","SAT"];
day=dayArray[day];

var hour=getFormatted(d.getHours());
var min=getFormatted(d.getMinutes());
var sec=getFormatted(d.getSeconds());
console.log(day);

document.getElementById("date").innerHTML=day+" - "+date+" : "+month+" : "+year;
//document.getElementById("time").innerHTML=day+" "+date+" "+month;
document.getElementById("time").innerHTML=hour+" : "+min+" : "+sec;
setTimeout(clock, 500);
    
}

function getFormatted(num){
	return num<10?"0"+num:num;  //if num <10 then return 0concatinate with num
}



