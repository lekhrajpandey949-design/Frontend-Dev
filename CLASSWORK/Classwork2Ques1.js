let values = ["50", "hello", false, null, "100px"];

values.forEach(value => {
    console.log("Value:", value);
    console.log("Number:", Number(value));
    console.log("Boolean:", Boolean(value));
    console.log("String:", String(value));
    console.log("------------------------");
});
