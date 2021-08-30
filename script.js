    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    const result=document.getElementById("result")
    var amount=principal+interest
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
document.getElementById("rate").addEventListener('change',updateRate)


function compute()
{

    p = document.getElementById("principal").value;
    result.innerHTML=`If you deposit ${principal},
at an interest rate of ${rate}%.
You will receive an amount of ${amount},
in the year ${year}`
    
}
        