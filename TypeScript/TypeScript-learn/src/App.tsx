import './App.css'

function App() {

  let firstName :string = "Test";
  let age :number = 26;

  //Union Types |
  let ageExample :number | string  = 26;

  //Literal Types
  let statusResult : "pending" | "approved" | "rejected";

  //Array
  let names : string[] =["Test1", "Test2"]
  let number2 : Array<number> = [1,2,3]
  let mixedArray  : (string | number)[] = [1,2,3]


  //type 
  type User = {
    name: string,
    age : number
  }

  let array2 :User[] = [{name: "tes", age: 26}]

  const object1: User = {
    name: "Cansu",
    age : 26
  }




  //interface  + Optiona type = ?
  interface User2 {
    name: string,
    age? : number
  }
  
  const object2: User2 = {
    name: "Cansu",
    age : 26
  }

 
  const object3: User2 = {
    name: "Cansu",
  }


  //function 1
  function calculate(a:number, b:number):number | string{
    return a+b;
  }

  const sum = calculate(4,4)
  console.log(sum)

  //function 2
  function write(Array:Array<string>) : void{
    array2.forEach((value) => console.log(value))
  }

  let Array : Array<string> = ["test1", "test2"]
  write(Array)




  //T type (generic function)
  function writeConsole<T>(array:T[]){
    console.log(array)
  }

  writeConsole(["test"])
  writeConsole([1])
  writeConsole([true])




  interface GenericType<T>{
    name: string,
    age : number,
    salary : T[]
  }

  const obj1: GenericType<string> = {
    name : "Cansu",
    age : 26,
    salary : ["5236","1000"]
  }

  const obj2: GenericType<number> = {
    name : "Cansu",
    age : 26,
    salary : [251,261]
  }


  function write2<T>(array:GenericType<T>[]):void{
    array.forEach((value: GenericType<T>) => console.log(value))
  }


  let array : GenericType<string | number>[]= [obj1, obj2]

  write2(array)






  //extends

  interface baseClass{
    id : string,
    date : string,
    name: string,
  }

  interface customer extends baseClass{
    custemorNo: string
  }


  interface company extends baseClass{
    companyNo: string
  }


  const company1: company = {
    id:"1",
    date :"10.07",
    name:"Test",
    companyNo:"654"
  }




  //some keywords
  //Partial = everything is optional
  //Required = everything should be filled in
  //Readonly = you can only read this 
  //Pick = pick only one prop => Pick<User3,"name">
  //Omit = take everything exept one prop => Omit<User3,"name">

  interface User3{
    name : string,
    age : number
  }

  const user1:Omit<User3,"name"> = {
    age:26
  }



  return (
    <>
     <p>{firstName}</p>
     <p>{age}</p>
    </>
  )
}

export default App
