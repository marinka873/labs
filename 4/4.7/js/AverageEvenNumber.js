var array = [2, 3 , 18, 0, 8, 77 ,4, 5, 9, 6, 13, 20, -9, 12, 33, 15, 10],
    averageEvenNumber =0,
    sum =0;

console.log('Origin array',array);

const evenNumber = i => !(i % 2);

for (var i=0; i < array.length; i++){
    if (evenNumber(array[i])){
        sum += array[i];
        console.log('Sum array elements', sum);
    }
}

averageEvenNumber = sum/array.length;
console.log('Average ', averageEvenNumber);


