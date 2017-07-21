
window.onload = function (){
    document.getElementById("date").innerHTML = Date.now();
    var myDate = new Date(Date.now());

    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    if (month < 11){
        month = "0" + month;
    }
    var date = myDate.getDate();
    if (date < 11){
        date = "0";
    }
    var formattedDate = year + "/" + month + "/" + date;
    document.getElementById("result").innerHTML = formattedDate;

    var convertDate = year + "-" + month + "-" + date;
    document.getElementById("result1").innerHTML = convertDate;

    var convertingDate = year + "-" + date + "-" + month;
    document.getElementById("result2").innerHTML = convertingDate;

    var convertingDate1 = date + "-" + month + "-" + year;
    document.getElementById("result3").innerHTML = convertingDate1;

    var convertingDate2 = date + "/" + month + "/" + year;
    document.getElementById("result4").innerHTML = convertingDate2;

    var convertingDate3 = month + "-" + date + "-" + year;
    document.getElementById("result5").innerHTML = convertingDate3;

     var convertingdate4 = month + "/" + date + "/" + year;
     document.getElementById("result6").innerHTML = convertingdate4;
};