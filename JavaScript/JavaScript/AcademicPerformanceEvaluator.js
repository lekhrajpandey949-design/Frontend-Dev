let marks = [85, 78, 92, 88, 76]; 
if (marks.some(mark => mark < 35)) {
    console.log("Detained (Failed in one or more subjects)");
} else {
    let percentage = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
    console.log("Percentage:", percentage.toFixed(2) + "%");
}
