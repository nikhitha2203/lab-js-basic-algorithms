console.log("I am ready!!!");
// Iteration 1: Names and Input

let driverName = "Raj";
console.log(`The driver's name is ${driverName}`);

let navigatorName = "James";
console.log(`The navigator's name is ${navigatorName}`);
// Iteration 2: Conditionals

if(driverName.length > navigatorName.length)
{
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`);
}
else if(navigatorName.length > driverName.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`);
}

// Iteration 3: Loops
