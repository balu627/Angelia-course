// fetch("https://api.github.com/users/balu627").then(apidata => {
//   return apidata.json();
// }).then(jsondata =>{
//   console.log(jsondata);
// });

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

async function surya() {
    try {
        let res = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE"
        });
        if (res.ok) {
            console.log("Success:",res.status);
        } else {
            console.error("Failed:", res.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
surya();
