<<<<<<< HEAD
// Entry Point of My Command Line

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch (command){       
    case "tree":
        // call tree function
        console.log();
        break;
    case "organize":
        // call organizer function
        break;
    case "help":
        //call help function
        break;
    default:
        console.log("command not recognized:");
        break;
}


=======
// Entry Point of My Command Line

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch (command){       
    case "tree":
        // call tree function
        console.log();
        break;
    case "organize":
        // call organizer function
        break;
    case "help":
        //call help function
        break;
    default:
        console.log("command not recognized:");
        break;
}


>>>>>>> 3be21ec477184d7e6f742900df745e7b48d8a3cb
