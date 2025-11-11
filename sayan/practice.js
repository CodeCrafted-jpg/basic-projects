// function featchdata(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//    resolve ({name:"Sayan"});
   
//    },2000);
// });

// }
// function fetchdeta2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//        resolve ({surname:"Mallick"});
       
//        },1000);
//     });
// } 



// async function getData() {
//     try {
//         console.log("deta is fetching......")
//        let name = await featchdata();
//        let surname = await fetchdeta2();
//     //    let fullname=`Full name is  ${this.name} +${this.surname}`;
// console.log(name)
// console.log(surname);
// console.log("data successfully fetched");
        
//     } catch (error) {
//         console.log("unable to fetch user data")
        
//     }
    
// }

// getData();
function createCounter() {
    let counter=0;
    return function(){
        counter++;
        return counter;
        };
}
let count=createCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());

