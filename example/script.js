let colorScheme = "light";

document.getElementById("light").style.display = "none";

document.getElementById("color-scheme-selector").addEventListener("click", function() {
    if(colorScheme == "dark"){
        colorScheme = "light";
        document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "light");
        document.getElementById("dark").style.display = "inline";
        document.getElementById("light").style.display = "none";
    }else{
        colorScheme = "dark";
        document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "dark");;
        document.getElementById("light").style.display = "inline";
        document.getElementById("dark").style.display = "none";
    }
})