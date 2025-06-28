//Function Declaration//
function getAreaRectangle (width, height) {
    return width * height;
}
console.log(getAreaRectangle(5, 10));



//Function Expression//
const getAreaRectangle2 = function (width, height) {
    return width * height;
}
console.log(getAreaRectangle2(0.55, 110).toFixed(2));


//Arrow Function Expression//
const getAreaRectangle3 = (width, height) => {
    return width * height;
}
console.log (getAreaRectangle3(1.8, 10));


//Consine Arrow Function Expression//
const getAreaRectangle4 = (width, height) => width * height;

console.log (getAreaRectangle4(3, 10));