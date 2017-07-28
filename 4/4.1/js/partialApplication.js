function partialApplication (elementOne, elementTwo, elementThree, elementFour) {
    var result = elementOne + elementTwo + elementThree + elementFour ;
    console.log(result);
}
var variantOne = partialApplication.bind(null, 5);
variantOne(2, 90, 8);

var variantTwo = partialApplication.bind(null, 10, 5, 25, 8);
variantTwo();


function partial (element_one, element_two, element_three){
    var resultPartial= element_one + element_two + element_three;
    console.log(resultPartial);
}

partial(1, 4, 3);