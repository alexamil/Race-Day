let raceNumber = Math.floor(Math.random() * 1000);//Early adults receive a race number at or above 1000.All others receive a number below 1000.
let earlyRegister = false;
const runnerAge = 18;
if (runnerAge > 18 && earlyRegister) {
console.log(`Adult registered early assigned with number ${raceNumber+= 1000}`);//Create a control flow statement that checks whether the runner is an adult AND registered early.Add 1000 to their raceNumber if this is true.
} 

if (runnerAge>18 && earlyRegister) {
console.log(raceNumber + " will run at 9:30");//This statement will check age and registration time to determine race time.
} else if (runnerAge > 18 && !earlyRegister) {
console.log(raceNumber + " will run at 11:00");
}//Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
else if (runnerAge < 18) {
console.log(raceNumber + " will run at 12:30");
} else if (runnerAge === 18) {
console.log("Please check registration desk");
}

