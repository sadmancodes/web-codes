function checkResult() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let cgpa = parseFloat(document.getElementById("cgpa").value);

    let result;

    if (cgpa < 2) {
        result = "In probation";
    }
    else if (cgpa < 3) {
        result = "Average";
    }
    else if (cgpa < 3.8) {
        result = "Good";
    }
    else {
        result = "Excellent";
    }

    document.getElementById("display").innerHTML =
        "Name: " + name + "<br>" +
        "ID: " + id + "<br>" +
        "CGPA: " + cgpa + "<br>" +
        "Result: " + result;
}