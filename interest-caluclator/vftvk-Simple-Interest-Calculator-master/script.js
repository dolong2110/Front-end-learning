function compute()
{
    let principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
    }

    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML =
        "If you deposit <mark>"+principal+",\</mark><br\>at an interest rate of <mark>"+rate+"%\</mark><br\>You will receive an amount of <mark>"+interest+",\</mark><br\>in the year <mark>"+year+"\</mark><br\>"
}

function updateRate()
{
    let rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}