// document.getElementById("app").style.backgroundColor = "red";
// its the code to add cs while using js and targeting Div tag
// variable is way to access that memory

// to repeat values we use loops like for , while if-else

// in loops if we want to display the value of keys we write "in"  in the loop follow by the var name"


function printName(){
    

    var person = {firstName: "Somesh", lastName:"Banerjee"};
    var txt= "";

    for (var x in person){
        // console.log(x); //this will print the keys of the var person
        console.log(person[x]) //since x is dynamic(it is changing we write it in [])

        txt = txt + person[x] + " ";
        console.log(txt);
    
    }
    document.getElementById("app").innerHTML = txt;
}