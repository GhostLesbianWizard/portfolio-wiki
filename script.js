function lightMode() {
    if (document.getElementById("lightSwitch").innerHTML == "Light Mode") {
        document.getElementById("lightSwitch").innerHTML = "Dark Mode";
    } else {
        document.getElementById("lightSwitch").innerHTML = "Light Mode";
    }
    document.body.classList.toggle("lightMode");
}