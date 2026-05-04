function prime(num) {
    if (num <= 1) {
        return false;
    }           
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 11
if (prime(number)) {
    console.log(number + " is a prime");    
} 
else {
    console.log(number + " is not a prime ");
}