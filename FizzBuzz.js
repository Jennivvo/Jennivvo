for (let n=1; n<=100; n++) {
    let output = "";
    if (n % 8 == 0) output += "FizzBuzz";
    console.log(output || n);
}
