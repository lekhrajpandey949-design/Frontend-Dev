let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;

let badwords = feedback.toLowerCase().includes("bad")|| feedback.toLowerCase().includes("poor");

console.log("Words:", words);

if(!badwords){
    console.log("Positive Feedback");
}

if(badwords){
    console.log("Needs Improvement");
}