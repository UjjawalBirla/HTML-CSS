
//////////////   CallBack  //////////////////




// // console.log('Start');

// // setTimeout(function(){
// //     console.log("hello I am good");
// // } , 3000)
// //  console.log("End");

// let promise=new Promise(function (resolve,reject) {
//     alert=("Hello");
//     resolve(56);
// })

// console.log("hello One");
// setTimeout(function(){
//    console.log("hello two in 2 Second");
//  } , 3000)

//  console.log("My name is" + "Hello three");
//  console.log(Promise);
 



   //////////   Promise   ///////////////////

// let p1 =new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("value 1");
//     },2000);
// });
// let p2 =new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         reject("value 2");
//     },3000);
// });
// let p3 =new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("value 3");
//     },4000);
// });

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// let promise_all=Promise.all([p1,p2,p3])
// let promise_all=Promise.allSettled([p1,p2,p3])
// let promise_all=Promise.race([p1,p2,p3])
// let promise_all=Promise.resolve([p1,p2,p3])
// let promise_all=Promise.reject([p1,p2,p3])
// // let promise_all=Promise.any([p1,p2,p3])
// promise_all.then((value) =>{
//       console.log(value)
// })


    //   /////// Async / Await   //////////////////////


    //////// error handling // Try Catch   ///////////////////////


// setTimeout(()=>
// {
//     console.log("A");
// },1000)

// try{
//     console.log(z)
// }
// catch(err)
// {
//     console.log("error Z")
// }
// setTimeout(()=>
// {
//     console.log("B");
// },2000)
// setTimeout(()=>
// {
//     console.log("C");
// },3000)
// setTimeout(()=>
// {
//     console.log("D");
// },4000)



//////////////////// Error Object & Custom Errors   /////////////////

//  try{
//     let age=prompt("enter your age")
//     age=Number.parseInt(age)
//     if(age>150)
//     {
//         throw new ReferenceError("this is not valid")
//     }
//  }
//  catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
//  }
//  console.log("This Script is still running")


/////////////////   Finally Clause   ///////////////////////

//  try{
//     let age=prompt("enter your age")
//     age=Number.parseInt(age)
//     if(age>150)
//     {
//         throw new ReferenceError("this is not valid")
//     }
//  }
//  catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
//  }

//  finally{
//     console.log("Run if error occors or not")
//  }
//   console.log("This Script is still running")
 

/////////////    practice All   /////////////////


// const loadScript=async(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script =document.createElement("script")
//         script.src=src  
//         script.onload=()=>{
//             resolve(src+"Done Succes")
//         }
//         document.head.append(script)
//     })
// }

// const main2=async ()=>{
//     console.log(new Date().getMilliseconds())
// let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
// console.log(a)
//  console.log(new Date().getMilliseconds())
// }
// main2()



//////////////////  Fetch API  POST   ///////////////////////


// const createTodo=async(todo)=>{
//     let options ={method: "POST",
//         header:{
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
//     let p=await fetch(`https://jsonplaceholder.typicode.com/posts`,options)
//     let response=await p.json()
//     return response
// }
// const gettodo=async(id)=>{
//  let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
//   let r = await response.json()
//   return r
// }

// const mainFunc=async(id)=>{
//     let todo={
//         title:'Heyyyyy',
//         body:'bhai',
//         userid: 101,
//     }
//     let todor=await createTodo(todo)
//     console.log(todor)
//     console.log(await gettodo(5))
// }
// mainFunc()


//////////////////  Cookie   ////////////////


// console.log(document.cookie)
// document.cookie="name=User234567"
// console.log="name=U"
// let key=prompt("enter your key")
// let value =prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)


//////////////////  Local Storage  //////////////////

// let key=prompt("enter your key")
// let value =prompt("enter your value")

// localStorage.setItem(key,value)

// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

// if(key=="red"  || key=="blue")
// {
//     localStorage.removeItem(key)
// }

// if(key==0)
// {
//     localStorage.clear()
// }


//////////////////  Session Storage //////////////////////


// let key=prompt("enter   your key")
// let value =prompt("enter your value")

// console.log(`the value at ${key} is ${sessionStorage.getItem(key)}`)

 /////////////////   OOPM    /////////////

///////////// __proto____    ////////////////


// class_name A__proto__=Class_name B



//////////  Classes & Object   //////////

// class RailwayForm{
//     submit(){
//         alert("Form Submit..........")
//     }
//     cancle(){
//          alert("...........Form Cancle")
//     }
// }
// let user1=new RailwayForm()
// let user2=new RailwayForm()

// user1.submit()
// user2.submit()
// user2.cancle()
  

