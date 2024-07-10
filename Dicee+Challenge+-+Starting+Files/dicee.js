function randomnum()
{
    return num = Math.floor(Math.random()*6)+1;
}

function switchcase(num)
{
    switch(num){
        case 1:
            return "dice1.png";
        case 2:
           return "dice2.png";
        case 3:
           return "dice3.png";
        case 4:
           return "dice4.png";
        case 5:
           return "dice5.png";
        case 6:
           return "dice6.png";
    }
}
if (sessionStorage.getItem("alreadyloaded") === null) {
    sessionStorage.setItem("alreadyloaded", "false");
}
function intinalfunc()
{
    var ans = sessionStorage.getItem("alreadyloaded");
    if(ans==="true")
    {
        var dice1 = randomnum();
        var dice2 = randomnum();
        var url1 = "./images/";
        var url2 = "./images/";
        var loc = switchcase(dice1);
        url1 = url1+loc;
        loc = switchcase(dice2);
        url2 = url2+loc;
        document.querySelector(".img1").setAttribute('src',url1);
        document.querySelector(".img2").setAttribute('src',url2);
        var heading = "";
        if(dice1>dice2)
        {
            heading  = "Player 1 Wins";
        }
        else if( dice1<dice2)
        {
            heading  = "Player 2 Wins";
        }
        else{
            heading = "Draw!"
        }
        document.querySelector("h1").innerHTML = heading;
    }
    else{
        console.log("hi");
        sessionStorage.setItem("alreadyloaded", "true");
    }
}
intinalfunc();