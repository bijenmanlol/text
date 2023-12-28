if(localStorage.getItem("color-scheme") == null) {
    localStorage.setItem("color-scheme", "light");
}

if(localStorage.getItem("color-scheme") == "dark"){
    localStorage.setItem("color-scheme", "dark");
    document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "dark");
    document.getElementById("light").style.display = "inline";
    document.getElementById("dark").style.display = "none";
}else{
    localStorage.setItem("color-scheme", "light");
    document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "light");;
    document.getElementById("dark").style.display = "inline";
    document.getElementById("light").style.display = "none";
}

document.getElementById("color-scheme-selector").addEventListener("click", function() {
    if(localStorage.getItem("color-scheme") == "dark"){
        localStorage.setItem("color-scheme", "light");
        document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "light");
        document.getElementById("dark").style.display = "inline";
        document.getElementById("light").style.display = "none";
    }else{
        localStorage.setItem("color-scheme", "dark");
        document.getElementsByTagName("html")[0].setAttribute("current-color-scheme", "dark");;
        document.getElementById("light").style.display = "inline";
        document.getElementById("dark").style.display = "none";
    }
})