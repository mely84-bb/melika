alert("this is a warning message");

function mb(){
    var d = "melika";
    alert(d);
}

mb();

var names = ["melika", "raha", "baran", "dorsa", "diba"];
document.write("<br>");
document.write(names[2]); 
var names2=names.sort();
console.log(names2);
document.write("<br/>")
for (var i = 0; i < names.length; i++) {
    document.write(names[i] + "<br>");
}
var name= "melika"
var lastname= "behroozpoor"
var age= "20"
var job= "unemployed"
document.write("name=" + name + "<br>");
document.write("family=" + lastname + "<br>");
document.write("age=" + age + "<br>");
document.write("job=" + job + "<br>");
document.write("<br/>")
var x =1954
var y=345
document.write(x+y);
document.write("<br/>")
document.write(x++);

function sum() {
    var number5 = document.getElementById("num1").value;
    var number6 = document.getElementById("num2").value;
    var sum = Number(number5) + Number(number6);
    alert("answer " + sum);
}
var person = {
name1:"melika",
name2:"bita",
name3:"parinaz",
family1:"mahdavy",
family2:"morady",
family3:"baraty",
age1:"10",
age2:"11",
age3:"12",
}

console.log(person.name1);
function java() {
    document.getElementById("ir").innerHTML = new Date();
}
var x = 5;
if (x > 10) {
    alert("true");
} else {
    alert("false");
}
    
       function clicktoshow() {
  const number = Number(document.getElementById("flower").value);                 //constمقداری ثابت نمیشه مقادیر اولیه تغییر داد


    

  switch (number) {
   case 1:
      flower = "رز";
    break;
 case 2:
       flower = "لاله";
     break;
  case 3:
  flower = "یاس";
    break;
  case 4:
       flower = "نرگس";
  break;
 case 5:
        flower = "آفتاب‌گردان";
           break;
            default:
          flower ="هیچ کدام"

}
      alert(flower);


}
//var names=["melika","setareh","khorshid","zahra"]
//var element=document.getElementById('for');
// var text =names[0]+"</br>";
// text+=names[1]+"</br>";
// text+=names[2]+"</br>";
// text+=names[3]+"</br>";
//element.innerHTML =text;

var names = ["melika", "setareh", "khorshid", "zahra"];
var element = document.getElementById('for');
var text = "";

for (var i = 0; i < names.length; i++) {
  text += names[i] + "<br>";
}

element.innerHTML = text;

// var i = 1;
  //  while (i <= 10) {
      //  document.write(i+ "<br>");
     //   i++;
   // }
        var i = 1; 
    do {   document.write( i + "<br>");
        i++;
    } while (i <= 10);

for (var i = 0; i <= 10; i++) {
    if (i === 3 || i === 7)
  continue;

    document.write(i + "<br/>");
}
    try {

        add("iran")
      
    } catch (error) {

        document.write("we have an error" + error.message);}
      finally  { alert("خطا")

        }
function test() {
    var message, x;                // همان var message;   var x;
    message = document.getElementById('mt1');
    x = document.getElementById('throw').value;

    try {

        if (x == "") throw "empety";
        if(isNaN(x)) throw "not number"
    } catch (error) {
        message.innerHTML = "input is"+error;
    }

}
//thisبه همین بدنه اشاره میکند
//var x= this //به کل صفحه اشاره میکند
//alert(x);
var x=10;
{
    let x=5;    //بیرون بلوک دسترسی نداریم

}
document.getElementById('mt1').innerHTML=x;
debugger;
var num1=4;
var num2=8;
var result=num1+num2;
document.getElementById("result").innerHTML=result;
    function myfunction() {
      var name = document.forms["myform"]["form"].value;
      if (name === "") {
        alert("لطفاً نام را وارد کنید");
        return false;
      }
      return true;
    }
//var m={name:"melika",family:"behrooz",age:"20"}
//function person(name, family, age) {
  //this.name = name;
// this.family = family;
  //this.age = age;
//}
//var baran = new person("bahar", "rahy", 100);
//console.log(baran);


  //  function MyFunction() {
     // var a, b, c;
    // a = 40;
    //  b = 100;
//c = a * b;
     // alert(c);
//}
   // MyFunction();
  function sum(a, b) {
      return a + b;
    }

document.getElementById("output").innerHTML =  sum(5, 3);

    function MyFunction()
    {
        for(var i = 0 ; i< arguments.length ; i++)
        {
          console.log(arguments[i]);
          
        }
    }
     MyFunction(18,"melika",true,550);



//document.getElementById('IR').innerHTML = "MELIKA BEHROOZ";
    // var Ps = document.getElementsByTagName("p");   //همه tagهای pرا پیدا کن                      
    // for (n in Ps) {
    //   console.log(Ps[n].innerHTML);
    // }
   //  var element = document.getElementsByClassName("melika");           //همه المان هایی که کلاسmelikaدارند را پیدا کن
    // console.log(element[0].innerHTML);

    var x = document.querySelectorAll("mb");
     console.log(x[0].innerHTML);






  

  


 


 




 
