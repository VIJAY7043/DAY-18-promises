let guvitask = 100
console.log("execution start")

//producer of promise

let placementPromise = new Promise(
    (resolve ,reject) =>{
        setTimeout(()=>{
        if(guvitask >= 70){
            resolve("your selected")
        }else{
            reject("sorry you have been rejected cause of not completed the task")
        }
    },3000)
    }
    
)
//chaining a  promise

let chainingPromise = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },2000)
    }
)



// promises return the value resolved or rejected

// consumer of promise
placementPromise.then((select)=>console.log(select))
.catch((rej)=>console.log(rej))

// chaining a promise
chainingPromise.then((val1)=>{
    console.log(`val : ${val1}`)
    return val1*2
}).then((val2)=>{
    console.log(`val2 : ${val2}`)
    return val2*3 
})

//promise.all()
let promise1 = new Promise(
   (resolve,reject)=>{
    setTimeout(()=>{
        console.log("the promise value is")
        resolve(20)
    },2000)
   }
)
let promise2 = new Promise(
    (resolve,reject)=>{
     setTimeout(()=>{
        console.log("the promise value is")
         resolve(30)
     },2000)
    }
 )
 let promise3 = new Promise(
    (resolve,reject)=>{
     setTimeout(()=>{
        console.log("the promise value is")
         reject("sorry you can't accesss")
     },2000)
    }
 )

 Promise.all([promise1,promise2,promise3])
 .then((val)=>console.log(val))
 .catch((err)=>console.log(err))


 // fetch
 fetch("https://restcountries.com/v3.1/all")
 .then((response) => {
   if (!response.ok) {
     throw new Error("Network response was not ok");
   }
   return response.json();
 })
 .then((data) => {
    console.log(data)
  data.forEach(ele => {
    console.log(`${ele.flag.png}`)
  });
 })
 .catch((error) => {
   // Handle any errors that occurred during the fetch or JSON parsing
   console.error("Fetch error:", error);
 });

