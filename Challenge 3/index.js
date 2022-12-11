// function sumValues(){
//     var num1, num2, res;
//     num1 = number(document.formcalc.txtnum1.value);
//     num2 = number(document.formcalc.txtnum2.value);
//     res = num1+ num2;
//     document.formcalc.txtres.value = re;
// }

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#allowence');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let basic = parseInt(e.target.basic.value)
        let allowence = parseInt(e.target.allowence.value)
        let result = document.querySelector('#result');
        result.textContent = calcNetPay(basic, allowence);


    })
})

function calcNetPay(basic, allowence){

    console.log(basic,allowence);
    let grossPay = basic +allowence;
    let nhif = calcNhif(grossPay);
    let nssf = calcNssf(grossPay);

    let taxable = grossPay - nhif - nssf;
    let payee = calcNetTax(taxable);
    let netSalary = taxable - payee;
    
    return netSalary;
    


    
    
}

function calcNetTax(taxable){
    if (taxable < 24001){
        return taxable * 0.1;
    } else if(taxable < 32333){
        return taxable * 0.25;
    } else{
        return taxable * 0.3;
    }
}


function calcNhif(grossPay){
    if(grossPay < 6000){
        return 150;
    } else if(grossPay < 8000){
        return 300;
    } else if(grossPay < 12000){
        return 400;
    } else if(grossPay < 15000){
        return 500;
    } else if(grossPay < 20000){
        return 600;
    } else if(grossPay < 25000){
        return 750;
    } else if(grossPay < 30000){
        return 850;
    } else if(grossPay < 35000){
        return 900;
    } else if(grossPay < 40000){
        return 950;
    } else if(grossPay < 45000){
        return 1000;
    } else if(grossPay < 50000){
        return 1100;
    } else if(grossPay < 60000){
        return 1200;
    } else if(grossPay < 70000){
        return 1300;
    } else if(grossPay < 80000){
        return 1400;
    } else if(grossPay < 90000){
        return 1500;
    } else{
        return 1600;
    }

}

function calcNssf(grossPay){
    return grossPay * 0.06;
}