
document.onload = function (formattedDateVariantFirst, formattedDateVariantSecond, formattedDateVariantThree, formattedDateVariantFour,formattedDateVariantFive, formattedDateVariantSix, formattedDateVariantSeven){
    document.getElementById("date").innerHTML = Date.now();
    let myDate = new Date(Date.now());

    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    if (month < 11){
        month = "0" + month;
    }
    let date = myDate.getDate();
    if (date < 11){
        date = "0";
    }
   this.formattedDateVariantFirst = function (year, month, date) {
       formattedDate = year + "/" + month + "/" + date;
       document.getElementById("result").innerHTML = formattedDateVariantFirst;
   };

    this.formattedDateVariantSecond = function (year, month, date) {
        convertDate = year + "-" + month + "-" + date;
        document.getElementById("result1").innerHTML = formattedDateVariantSecond;
    };

    this.formattedDateVariantThree = function (year, month, date) {
        convertingDate = year + "-" + date + "-" + month;
        document.getElementById("result2").innerHTML = formattedDateVariantThree;
    };

    this.formattedDateVariantFour = function (year, month, date) {
        convertingDate1 = date + "-" + month + "-" + year;
        document.getElementById("result3").innerHTML = formattedDateVariantFour;
    };

    this.formattedDateVariantFive = function (year, month, date) {
        convertingDate2 = date + "/" + month + "/" + year;
        document.getElementById("result4").innerHTML = formattedDateVariantFive;
    };

    this.formattedDateVariantSix = function (year, month, date) {
        convertingDate3 = month + "-" + date + "-" + year;
        document.getElementById("result5").innerHTML = formattedDateVariantSix;
    };

    this.formattedDateVariantSeven = function (year, month, date) {
        convertingdate4 = month + "/" + date + "/" + year;
        document.getElementById("result6").innerHTML = formattedDateVariantSeven;
    };

};