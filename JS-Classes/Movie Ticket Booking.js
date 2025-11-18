function bookTicket(name, email, seats) {
    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsReg = /^([1-9]|10)$/;

    if (!nameReg.test(name)) return "Invalid name";
    if (!emailReg.test(email)) return "Invalid email";
    if (!seatsReg.test(seats)) return "Seats must be 1–10";

    const ticket = { name, email, seats };
    return ticket;
}

console.log(bookTicket("Rahul", "rahul@mail.com", 4));
