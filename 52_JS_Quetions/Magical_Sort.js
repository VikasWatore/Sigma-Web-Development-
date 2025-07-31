// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students=["Vikas","Akash","Shubham","Dhiraj","Sushant","Deviprasadlalsignh","abcdhsjtr"];
let hosueName=[];

for (const element of students) {
    if(element.length<6){
        hosueName.push("Gryffindor");
    }else if(element.length<8){
        hosueName.push("Hufflepuff");
    }else if(element.length<12){
        hosueName.push("Ravenclaw");
    }else{
        hosueName.push("Slytherin");
    }
    }

for (let i = 0; i < hosueName.length; i++) {
   console.log(hosueName[i]);

}    