function myFunction(){
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try{
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x >= 81) throw " License suspended"
        if(x >= 80) throw " Points: 2";
        if(x <= 70) throw " ok";
        if(x >= 50) throw " ok";
        if(x <= 40) throw " ok";
        
    }

    catch(err) {
        message.innerHTML = "Speed" + err;

    }
    finally {
        document.getElementById("demo").value = "";
    }

}

