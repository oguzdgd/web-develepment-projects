const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")

function generate(){
    
    let password1 =[]
    let password2 =[]
    
    let passwordLength = document.getElementById("password-length").value
    let charactersLength = symbolsandnumbers()
    console.log(charactersLength)
 
    for(let i = 0; i<passwordLength ; i++){
        password1.push(characters[Math.floor(Math.random()*charactersLength)])
        password2.push(characters[Math.floor(Math.random()*charactersLength)])
    }
   
    password1 = password1.join("")
    password2 = password2.join("")
    container1.textContent = password1
    container2.textContent = password2
    
}

function symbolsandnumbers(){
    let characterslength = characters.length
    let toggle = document.getElementById("toggle").checked
    console.log(toggle)
    if(toggle){
        return characterslength
    }else{
        return 52
    }
}

function copy(){
    let copyText1=container1.textContent;
    let copyText2=container2.textContent;
    navigator.clipboard.writeText(copyText1)
    navigator.clipboard.writeText(copyText2)    
}


