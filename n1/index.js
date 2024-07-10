function fuboncci(num)
{
    var series = [0,1];
    if(num == 1)
    {
        console.log(0);
    }
    else if(num==2)
    {
        console.log(0,1)
    }
    else{
        for(var i =2;i<num;i++)
        {
            series.push(series[i-1]+series[i-2]);
        }
        console.log(series);
    }
}

fuboncci(5);