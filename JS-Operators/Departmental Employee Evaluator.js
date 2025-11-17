const departments = [ 
["HR", 72], 
["Finance", 88], 
["Tech", 95], 
["Support", 63] 
];
for (let i = 0; i < departments.length; i++) {
    let name = departments[i][0];   
    let score = departments[i][1];  
    let result = "";

    if (score >= 90) {
        result = "Excellent";
    } else {
        if (score >= 75) {
            result = "Good";
        } else {
            if (score >= 60) {
                result = "Average";
            } else {
                result = "Needs Improvement";
            }
        }
    }

    console.log(name + ":", result);
}