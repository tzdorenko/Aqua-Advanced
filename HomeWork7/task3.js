function devide(numerator, denominator ){ 
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error ("Both have to be numbers");
        }
    if (denominator === 0) {
        throw new Error ("Can't be divide be zero");
    }
    return numerator / denominator;
}
try {
    const result = devide(10, 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Done, completed")
}
try {
    const result = devide(10, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Done, completed")
}
try {
    const result = devide("ten", 2);
    console.log(result);
} catch (error) {
    console.error(error.mesage);
} finally {
    console.log("Done, completed")
}