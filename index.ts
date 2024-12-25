const hero : string ="Mukund jha";
console.log(hero);

let greet = (firstname:string) =>
{
    console.log(`hello ${firstname}`)
}
greet('Mukund jha')

let sum = (num1:number ,num2:number):number =>
{
    return num1 + num2
}

console.log(sum(3,4))

function voting_elligible (age:number)
{
    if(age>=18)
    {console.log('elligible to vote')}
    else{
        {console.log('not elligible to vote!')}
    }
}
voting_elligible(12);

function runafter1sec(fn:()=>void)
{
    setTimeout(fn,1000)
}

runafter1sec(function()
{
    console.log('Mukund jha')
})

interface User {
  firstname : string,
  lastname : string,
  age: number,
  email?:string,
}

const age_checking  = (user:User):boolean=>
{
   if(user.age >= 18 )
   {
    return true;
   }
   else{return false}
}

let greeting = (user:User):void =>
{
   if(user.firstname)
   {
     console.log(`congratulation : ${user.firstname}`)
   }
   
}

let userobj : User={
    firstname: "Mukund jha",
    lastname : "jha",
    age : 20,
    email:'jhamukund986@gmail.com'
}

if(age_checking(userobj))
{
    greeting(userobj);
}
else{
    console.log('not elligibke to Vote ')
}

interface person {
    name : string,
    age : number,
    greet(phrase :string) : void
};


class Manger implements person{
    name : string;
    age : number;


    constructor(name : string,age: number)
    {
       this.name = name;
       this.age = age;
    }

    greet(phrase:string):void{
        console.log(`${phrase},My name is ${this.name} and my age is ${this.age}`)
    }
}

const Manager = new Manger('mukund jha',18)
console.log(typeof(Manager))


Manager.greet("hello");



interface Students {
    Fullname : string,
    Lastname : string,
    class: string,
    Roll_no : number,

    student_info(phrase:string):void
}

interface Students {
    Fullname: string;
    Lastname: string;
    className: string;
    Roll_no: number;

    student_info(phrase: string): void;
}

// class School implements Students {
//     Fullname: string;
//     Lastname: string;
//     className: string;  
//     Roll_no: number;

//     constructor(Fullname: string, Lastname: string, className: string, Roll_no: number) {
//         this.Fullname = Fullname;
//         this.Lastname = Lastname;
//         this.className = className;
//         this.Roll_no = Roll_no;
//     }

//     student_info(phrase: string): void {
//         console.log(`${phrase}: ${this.Fullname} ${this.Lastname}, Class: ${this.className}, Roll No: ${this.Roll_no}`);
//     }
// }

// const student = new School("Mukund", "Jha", "10th Grade", 24);
// student.student_info("Student Info");

