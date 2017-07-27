function linearUnfold(element){

    const array =[];

    for (let i=element; i >0; --i){
        array.push(i);
    }
    return array;
}

console.log(linearUnfold(10));