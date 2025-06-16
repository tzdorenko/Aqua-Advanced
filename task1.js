//Function Declaration//
function getAreaRectangle (width, height) {
    return width * height;
}
console.log(getAreaRectangle(5, 10));



//Function Expression//
const getAreaRectangle = function (width, height) {
    return width * height;
}
console.log(getAreaRectangle(5, 10));


//Arrow Function Expression//
const getAreaRectangle = (width, height) => {
    return width * height;
}
console.log (getAreaRectangle(5, 10));


//Consine Arrow Function Expression//
const getAreaRectangle = (width, height) => width * height;

console.log (getAreaRectangle(5, 10));