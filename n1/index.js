// fetch("https://api.github.com/users/balu627").then(apidata => {
//   return apidata.json();
// }).then(jsondata =>{
//   console.log(jsondata);
// });

// console.log(init);
// var init = 1;
// init = 2;
// console.log(init);
// {
//     let init2 = 2;
//     init2 = 4;
//     console.log(init2);
// }
// //limited to block only 
// //console.log(init2);

// {
//     const init3 = 3;
//     //cannot redefine this one 
//     init3.name = 2;
//     //init3 = 8
//     console.log(init3.name);
// }

//Dot map function

// const iniarr = [1, 2, 3, 4, 5];

// const adarr = iniarr.map(add);
// console.log(adarr);
// function add(number)
// {
//     return number+2;
// }

// const initarr = ["vamsi","krishna","balu"];
// const initarr1 = ["VAMSI","KRISHNA","BALU"];
// const modarr = initarr.map(arrupcse);
// const modlarr = initarr1.map(arrLrcse);
// console.log(modarr);
// console.log(modlarr);

// function arrupcse(str)
// {
//     return str.toUpperCase();
// }
// function arrLrcse(str)
// {
//     return str.toLowerCase();
// }
//Arroe function;
// const initarr = ["2024-05-29","2022-08-09","2020-12-02","2015-08-11"];
// const modiarr = initarr.map(str=>{
//     const split = str.split("-");
//     return `${split[2]}/${split[1]}/${split[0]}`;
// });
// console.log(modiarr);
//traditional function
// function formaterDate(str)
// {
//     const split = str.split("-");
//     return `${split[2]}/${split[1]}/${split[0]}`;   
// }

// //Pomises
// let pros = new Promise((resolve,reject)=>{
//     if(1+1==2)
//         {
//             resolve("Success");
//         }
//         else{
//             reject("Failed");
//         }
// });
// pros.then((Message)=>{
//     console.log("This is in Then block With "+Message);
// })
// .catch((message)=>{
//     console.log("This is inside Catch block "+message);
// });

// function random()
// {
//     console.log("first line");
//     setTimeout(() => {
//         console.log("mid line");
//     }, 2000);
//     console.log("second line");
// }

// random();
// function sleep() {
//     let sum =0;
//     for(let i=0;i<900000000;i++)
//         {
//             sum+=i;
//         }
//     return sum;
// }
// function random() {
//     let ans = sleep();
//     console.log(ans);
// }
// console.log("first line");
// random();
// console.log("second line");

// function sleep()
// {
//     let sum =0;
//     for(let i =0;i<900000000;i++)
//         {
//             sum+=i;
//         }
//     return sum;
// }
// async function sync()
// {
//     let ans = await sleep();
//     console.log("mid");
// }
// console.log("first line");
// sync();
// console.log("last line");

// async function fetchgithub()
// {
//    let response = await fetch("https://api.github.com/users/balu627");
//    return response.json();
// }

// fetchgithub().then(jsondata => console.log(jsondata));

// async function newlink(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if(!response.ok)
//     {
//       throw Error(`HTTP error! status: ${response.status}`);
//     }
//   return response.json();
// }
// // it doesent wait for the promise response
//   // let ans = newlink();
//   // console.log(ans);

//   newlink().then(data=>{
//     data.forEach(user=>{
//       const markupl = `<li>${user.name}</li>`;
//       document.querySelector('ul').insertAdjacentHTML('beforeend',markupl);
//     });
//   })
//   .catch(error=>console.log(error));

// surya();
// async function surya()
// {
//     try{
//         let response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple");
//         let resjs = await response.json();
//         let results = resjs.results;
//         console.log(results);
//         results.forEach(arr=>{
//             let ques = `<h3>${arr.question}</h3>`;
//             let opt = arr.incorrect_answers;
//             opt.push(arr.correct_answer);
//             opt.forEach(sopt=>{
//                 ques+=`<li>${sopt}</li>`;
//             });
//             document.querySelector('.main').insertAdjacentHTML('afterbegin',ques);
//         });
//     }
//     catch{
//         setTimeout(surya,500);
//     }
// }
// let newvar = {
//         "name": "test",
//         "salary": "123",
//         "age": "23",
//         "id": 25
// }
//  async function surya()
//  {
//     let Response = await fetch("https://dummy.restapiexample.com/api/v1/create",{method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(newvar)
//     });
//     if(Response.ok)
//         {
//             console.log("success");
//         }
//     }

//  surya();

// let data =
//     {
//         "email": "eve.holt@reqres.in",
//         "password": "pistol"
//     }

// async function surya()
// {
//     try{
//         let res = await fetch("https://reqres.in/api/register",{
//             method:"POST",
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(data)
//         });
//         if(res.ok)
//         {
//             let jsdata = await res.json();
//             console.log("success:",jsdata);
//         }
//         else{
//             console.error("error",res.status);
//         }
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }
// surya();


// async function surya() {
//     try {
//         let res = await fetch("https://reqres.in/api/users/2", {
//             method: "DELETE"
//         });
//         if (res.ok) {
//             console.log("Success:",res.status);
//         } else {
//             console.error("Failed:", res.status);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// surya();

let data = {
    "name": "morpheus",
    "job": "zion resident"
};
async function surya()
{
    try{
        let res = await fetch("https://reqres.in/api/users/2",{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        if(res.ok)
            {
                let resjs = await res.json();
                console.log("success",resjs);
            }
            else{
                console.error("Failed:",res.status);
            }
    }catch(error)
    {
        console("Error",error);
    }
}
surya();