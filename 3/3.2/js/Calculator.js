"use strict";

var x,y, result;

function Calculator(){
    var methods = {
        "+" : function increment(x,y){
            return x+y;
                },
        "-" : function decrement (x,y) {
            return x-y;
            },
        "*" : function multiplication (x,y) {
            return x*y;
        },
        "/" : function division (x,y) {
            return x/y;
        }
    };

    this.calculate = function (str) {

    }
}