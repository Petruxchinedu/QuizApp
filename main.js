 var studentName =["Akin", "ola", "bolaji",1, false, ""]
//     // console.log(studentName[0] + ' is my name,' + 'I am ' + studentName[3] + ' year old')
//     // console.log(studentName.length)
// studentName.pop();
// console.log(studentName)
// studentName.push('pita', 'jane');
// console.log(studentName)
// studentName.unshift('wema');
// console.log(studentName)
// studentName.shift()
// console.log(studentName)
//var newStudent = studentName.slice(1, 4)
//console.log(newStudent);
// studentName.slice(1, 4);
// console.log(studentName);
    studentName.splice(1, 2, "boy");
    console.log(studentName);

//     var a = [1,2,3]
//     var b = [4,5,6]
//     var twoArray = a.concat(b)
//     console.log(twoArray);

        // var A = [1, 2, 3]               /**SPREAD METHOD */ var A = [1, 2, 3] 
        // var B = [ "a", "b", "c"]                            var B = [ ...A,"a", "b", "c"]
        // B.unshift(A.shift())                                console.log(B)
        // console.log(A)              /*DESTRUCTURING FOR A */var[larva,academy,coding]= A
        
        /**QUESTION */
    // var all = ["ayomide", [4,["male", "ade", "akin",["female", "ajoke", "princess"]]]]
    // console.log("my name is " + all[0],  "I have " + all[1][0] + " children, " + all[1][1][1]  + " and " + all[1][1][2] + " are " + all[1][1][0] +',' + " while "  + all[1][1][3][1] + " and " + all[1][1][3][2] + " are " + all[1][1][3][0])