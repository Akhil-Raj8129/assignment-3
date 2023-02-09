function validate() {
    let vname = /^[a-z A-Z]{2,15}$/;
    let nam = document.getElementById("t").value;
    let m = document.getElementById("email").value;
    let mail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    let pack = document.getElementById("p").value;
    let dateformat =
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let date = document.getElementById("x").value;
    let per = /^[0-9]$/;
    let person = document.getElementById("y").value;
    if (nam == "") {
        alert("Name field is mandatory");
        return false;
    } else if (!vname.test(nam)) {
        alert("Please enter your full name");
        return false;
    }
    if (m == "") {
        alert("Email field is mandatory");
        return false;
    } else if (!mail.test(m)) {
        alert("Please enter valid mail id");
        return false;
    } else if (pack == "0") {
        alert("Please selct any package");
        return false;
    }
    if (date == "") {
        alert("date field is mandatory");
        return false;
    } else if (!dateformat.test(date)) {
        alert("Please enter valid date(dd/mm/yyyy)");
        return false;
    }
    if (person == "") {
        alert("number of person field is mandatory");
        return false;
    } else if (!per.test(person)) {
        alert("Please enter a valid number");
        return false;
    } else if (
        document.getElementById("boarding").checked == false &&
        document.getElementById("fooding").checked == false &&
        document.getElementById("sightseeing").checked == false
    ) {
        alert("Please select any option for what do you want to avail");
        return false;
    } else if (
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false
    ) {
        alert("Do you want to agree or disagree?");
        return false;
    } else {
        return true;
    }
}
