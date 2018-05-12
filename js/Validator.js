function validate() {
    let form = document.getElementById('formTest');

    let err = 0;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let date = form.date.value;
    let mail = form.email.value;
    let address = form.address.value;
    let password = form.password.value;

    err += fieldReq(firstName, "name is req", "errFN", "firstName");
    err += validateText(firstName, "You can't have \' or \" in your name, but anything else you can ;)", "errFN", "firstName");
    err += fieldReq(lastName, "last name is req", "errLN", "lastName");
    err += validateText(lastName, "You can't have \' or \" in your name, but anything else you can ;)", "errLN", "lastName");
    err += fieldReq(date, "date is req", "errDate", "birthday")
    err += validateDate(date, "nice try :)", "errDate", "birthday");
    err += fieldReq(mail, "email is req", "errEmail", "email");
    if (mail !== '') {
        err += validateEmail(mail, "GIVE ME YOUR EMAIL, I HAVE TO SEND ADV", "errEmail", "email");
    }
    err += fieldReq(address, "address is req", "errAdd", "address");
    err += validateText(address, "We want to come, give address", "errAdd", "address");
    err += fieldReq(password, "pass is req", "errPas", "password");

    if (err === 0) {

        window.location = '#modal';
        return true;
    }

    return err === 0;
}

function validateText(text, message, errElementId, elementId) {
    if ((text.search('\'') !== -1) ||
        (text.search('\"') !== -1)) {
        createMessage(message, errElementId);
        createBorder(elementId);

        return 1;
    }

    return 0;
}

function fieldReq(text, message, errElementId, elementId) {
    if (text === '') {
        createMessage(message, errElementId);
        createBorder(elementId);
        return 1;
    }

    return 0;
}

function validateDate(date, message, errElementId, elementId) {
    //let re = /^\d{1,2}-\d{1,2}-\d{4}$/;
    let now = Date.now();
    if (now < Date.parse(date)) {
        createMessage(message, errElementId);
        createBorder(elementId);

        return 1;
    }

    return 0;
}

function validateEmail(email, message, errElementId, elementId) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        createMessage(message, errElementId);
        createBorder(elementId);

        return 1;
    }

    return 0;
}

function createMessage(message, elementId) {
    document.getElementById(elementId).innerHTML = "";
    document.getElementById(elementId).innerHTML += message;
}

function createBorder(elementId) {
    document.getElementById(elementId).style.border = "2px solid red";
}