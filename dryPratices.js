


let rahimMarks = 85;
let karimMarks = 72;
let sakibMarks = 95;

// প্রতিটি ছাত্রের জন্য আলাদা করে গ্রেড চেক
if (rahimMarks >= 80) {
  console.log("Rahim: A");
} else if (rahimMarks >= 70) {
  console.log("Rahim: B");
} else {
  console.log("Rahim: C");
}

if (karimMarks >= 80) {
  console.log("Karim: A");
} else if (karimMarks >= 70) {
  console.log("Karim: B");
} else {
  console.log("Karim: C");
}

if (sakibMarks >= 80) {
  console.log("Sakib: A");
} else if (sakibMarks >= 70) {
  console.log("Sakib: B");
} else {
  console.log("Sakib: C");
}


// convert into dry
const gradeGenrator = (mark, name) => {

  if(mark>100)
  {
    console.log("you hacked the server")
  }else if(mark>=80 && mark<=100){
    console.log(`${name} you got A+`)

  }else if(mark>=70 && mark<80)
  {
    console.log(`${name} you got A`)
  }else{
    console.log(`${name} try next time`)
  }


}
gradeGenrator(80, "sakib");


// WET (We enjoy Typeing) যেখানে আমরা কোড পুনরাবৃত্তি করি, যেমন আমাদের ছাত্রের ফলাফল প্রয়োজন কিন্তু আমরা প্রতিটি ছাত্রের জন্য একই কাজ করি।

// DRY (Do not repeat yourself) হচ্ছে, আমরা সমস্ত যুক্তি রাখি এবং প্রতিটি ছাত্রের জন্য একটি মাত্র ফাংশন  যা ছাত্রের ফলাফল গণনা করে। 



let a = 10, b = 20;
console.log(a + b);

let x = 15, y = 25;
console.log(x + y);



// convert dry to wet 

const numberAdd = (a,b)=>{

  if(!a || !b)
  {
    return;
  }
  return a+b;

}