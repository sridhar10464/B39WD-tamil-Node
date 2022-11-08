const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart 😁"
// fs.writeFile("./awesome.html", quote, (err) =>{
//     console.log("Completed writing!!");
// });


// ex2:
// const quote2 = "Live more, worry less 😎😍"

// for(let i=1; i <= 10; i++){
// fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("Completed writing!!!");
// });
// }

// ex3:
// const quote3 = "Live more, worry less 😎😍"

// // console.log(process.argv);
// const [, , noOfFiles] = process.argv;
// for(let i=1; i <= noOfFiles; i++){
// fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
//     console.log("Completed writing!!!");
// });
// }

// ex:4
// fs.readFile("./msg.txt", "utf-8", (err, data) => {
//     if (err){
//         console.log("❌", err);
//     } else {
//         console.log(data);
//     }
// //     
// });

// ex:5
const quote3 = "Dream without fear, love without limit"

fs.appendFile("./fun.html", "\n" + quote3, (err) => {
    console.log("Completed updating!!!");
});

// ex6:
fs.unlink("./delete-me.css", (err) => {
    
})