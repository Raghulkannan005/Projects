function fdRate(){
    let val = document.getElementById("tnr").value;
    let rate;
    if(val>0 && val < 3)
        rate= 5.8
    else if(val >= 3 && val <= 6)
        rate= 6.5
    else if(val >= 7 && val <= 9)
        rate= 6.8
    else if(val > 10)
        rate= 7
    else
        rate = 0
    document.getElementById("result").textContent =rate+"%";
    let rs = parseFloat(document.getElementById("amt").value);
    let cut = ((rs*rate/100*val)/12);
    let totalAmount = cut + rs;
    document.getElementById("amount").textContent = "Total Amount: " + totalAmount.toFixed(2);
    document.getElementById("vadi").textContent = "Interest: " + cut.toFixed(2);
}