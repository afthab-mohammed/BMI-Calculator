

function bmi(){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    let bmivalue=((weight/(height*height))*10000).toFixed(1) ;
    
    // document.getElementById('ans').innerHTML=bmivalue;
    if(weight===""||height===""){
        alert("please fill the required boxes");
    
    }
    else if(bmivalue<=18.5){
        document.getElementById('ans').innerHTML=bmivalue;
        document.getElementById('val').innerHTML=`<p style=color:yellow> You are Under weight</p>`
    }
    else if(bmivalue>=18.5 && bmivalue<=25){
        document.getElementById('ans').innerHTML=bmivalue;
        document.getElementById('val').innerHTML=`<p style=color:green>Your BMI is Normal</p>`
    }
    else if(bmivalue>=25 && bmivalue<=30){
        document.getElementById('ans').innerHTML=bmivalue;
        document.getElementById('val').innerHTML=`<p style=color:darksalmon>You are Over weight</p>`
    }
    else{
        document.getElementById('ans').innerHTML=bmivalue;
        document.getElementById('val').innerHTML=`<p style=color:red>You are Obese</p>`
    }
        
    }
    
    function del(){
        window.location.reload();
    }