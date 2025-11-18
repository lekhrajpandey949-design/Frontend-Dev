class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.formData = {};
    }

    fillField(label, value) {
        this.formData[label] = value;
    }

    getFormData() {
        return this.formData;
    }
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

form.fillField("Username", "Rahul123");
form.fillField("Email", "rahul@mail.com");

console.log(form.getFormData());
