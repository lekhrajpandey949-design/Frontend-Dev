let productname = "wireless headphone pro";
let cleaned = productname.trim().toLowerCase();

let words = cleaned.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let finalTitle = words.join(" ");

finalTitle = finalTitle.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);