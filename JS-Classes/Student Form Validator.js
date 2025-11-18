function validateStudent(name, email, phone, password) {
    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^\d{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;

    console.log("Name valid:", nameReg.test(name));
    console.log("Email valid:", emailReg.test(email));
    console.log("Phone valid:", phoneReg.test(phone));
    console.log("Password valid:", passReg.test(password));
}

validateStudent("Rahul", "test@mail.com", "9876543210", "Pass@123");
