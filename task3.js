function checkOreder(available, ordered) {
  if (ordered <= available) {
    console.log("Your order is accepted");
  } else if (available < ordered) {
    console.log("Your order is too large, we don’t have enough goods");
  } else {
    console.log("Your order is empty");
  }
}

checkOreder(25, 25); 
checkOreder(2, 50); 
checkOreder("n", 5); 