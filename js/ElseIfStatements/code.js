function testSize(num) {
    // Only change code below this line
    if (num>=20) {
        return console.log("Huge");
    }
    else if (num<20 && num>=15) {
        return console.log("Large");
    }
    else if (num<15 && num>=10) {
        return console.log("Medium");
    }
    else if (num<10 && num>=5) {
        return console.log("Small");
    }
    else if (num<5) {
        return console.log("Tiny");
    }
    // Only change code above this line
}

testSize(14);