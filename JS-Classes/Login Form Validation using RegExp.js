function validateLogin(username, password) {
    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    console.log("Username valid:", userReg.test(username));
    console.log("Password valid:", passReg.test(password));
}

validateLogin("Rahul12", "Test@123");
