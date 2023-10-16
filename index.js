let objectTest = {
  "1": {
    "11": 11,
    "12": 12,
    "13": {
      "131": 131,
      "132": 132,
      "133": 133,
    }  
  },
  "2": 2,
  "3": 3,
  show() {console.log(this[1])},
}
// this and added coment

objectTest.show();
/ // console.log(test);
//   if (typeof (test) == "object") {
//     console.log( Object.getOwnPropertyNames(test)[0]);
//     for (key in test) {
//       // console.log("inside the if : ", test[key]);
//       write(test[key]);
//     }
//   } else {
//     console.log(test);
//   }
// }

// write(objectTest);
console.log("End of the process");
