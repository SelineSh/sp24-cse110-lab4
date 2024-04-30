function printNums(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(printNums, 1000);