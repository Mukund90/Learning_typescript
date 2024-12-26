type greetArg = number | boolean | string;

function greet(id :greetArg):void  {
console.log('id :', id)
} //union types 

greet (1)
greet(true);
greet("2");


type Employee = {
    name : string;
    startDate : Date;
}

interface Manager {
  name : string;
  department : string;
}


//type can do let & and | but interface can't do this 
//interface can implement by class type cant implement by class.

type Techlead = Employee | Manager;

type techlead= {
    name : string;
    department : string;
    startDate:Date;

}

const t : techlead= {
name : "mukund jha",
department : "Hr",
startDate: new Date(),
}


type max_number = number[];

function max_array ( arr:max_number):number
{
 let max = 0;
  for (let i = 0; i<arr.length ; i++)
  {
    if(arr[i]>max)
    {
      max = arr[i];
    }
  }
  return max;
}


console.log(max_array([2,8,9,65]));

interface shape {
    name : string,
    color : string,
    area:()=>number
}


function calculate_area(shape :shape ):number
{
   console.log('calculating area of the shape :' +  shape.name)
   return shape.area();
}


const Circle :shape  ={
    name : 'circle',
    color : 'red',
    area (){
     return Math.PI * 2* 2
    }
 }


console.log(calculate_area(Circle));

enum status_code {
    ok  = 'all ok',
    some_wrong = 'something went wrong'
}


let bad_request = (status :status_code):void =>
{
    if(status === status_code.ok)
    {
        console.log('all is ok')
    }
}
bad_request(status_code.ok)


interface Rectangle {
    length : number,
    breadth : number,
    height:number,
    calculate_length : ()=>number
}

const calculate_rectangle = (rect:Rectangle):number=>
{
    return rect.calculate_length()
}


const bucket : Rectangle =
{
    length : 10,
    breadth : 20,
    height:7,
    calculate_length() {
     return this.length * this.breadth * this.height
    },
}

let num = calculate_rectangle(bucket)
console.log('total_calculation :'+ num)