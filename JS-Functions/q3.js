const user = {
  name: "Lekhraj",
  showName: () => {
    console.log(this.name);
  }
};

user.showName();

const userFixed = {
  name: "Lekhraj",
  showName() {
    console.log(this.name);
  }
};

userFixed.showName();
