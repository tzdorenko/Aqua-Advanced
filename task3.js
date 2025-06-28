function checkOreder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty"
  } if (available < ordered) {
    return "Your order is too large, we don't have enough goods";
  } 
  return "Your order is empty";
}


console.log(checkOreder(25, 25));
console.log(checkOreder(2, 50));
console.log(checkOreder("n", 5));
