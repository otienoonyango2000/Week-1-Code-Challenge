function myFunction(){
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try{
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 79) throw " is equal to A"
        if(x >= 60) throw " is equal to B";
        if(x >= 50) throw " is equal to C";
        if(x >= 40) throw " is equal to D";
        if(x < 40) throw " is equal to E";
    }

    catch(err) {
        message.innerHTML = "Input" + err;

    }
    finally {
        document.getElementById("demo").value = "";
    }

}