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
const initarr = ["2024-05-29","2022-08-09","2020-12-02","2015-08-11"];
const modiarr = initarr.map(str=>{
    const split = str.split("-");
    return `${split[2]}/${split[1]}/${split[0]}`;
});
console.log(modiarr);
//traditional function
// function formaterDate(str)
// {
//     const split = str.split("-");
//     return `${split[2]}/${split[1]}/${split[0]}`;   
// }