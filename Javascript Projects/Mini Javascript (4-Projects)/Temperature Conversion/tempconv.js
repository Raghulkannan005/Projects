let dropdown = document.getElementById("opt");
        let selectedoption;
        dropdown.addEventListener("change",function(){
            selectedoption = dropdown.value;
        });
        function conv(){
            if (selectedoption == "cel")
        {
            let celcius = Number(document.getElementById("ip").value);
            let fahrenheit = (celcius*9/5)+32;
            let result = document.getElementById("result");
            result.innerHTML=(fahrenheit.toFixed(2)+"° Fahrenheit");
        }
        else if (selectedoption == "fah")
        {
            let fahrenheit = Number(document.getElementById("ip").value);
            let celcius = (fahrenheit-32)*5/9;
            let result = document.getElementById("result");
            result.innerHTML=(celcius.toFixed(2)+"° Celcius");
        }
        else{
            result.innerHTML=("Please Choose an option");
        }
        }