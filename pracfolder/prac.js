console.log(init);
var init = 1;
init = 2;
console.log(init);
{
    let init2 = 2;
    init2 = 4;
    console.log(init2);
}
//limited to block only 
//console.log(init2);

{
    const init3 = 3;
    //cannot redefine this one 
    init3.name = 2;
    //init3 = 8
    console.log(init3.name);
}