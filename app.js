document.getElementById("orderBtn").addEventListener("click", function () {
    let name = prompt("Enter your name:");
    let gender = prompt("Enter your gender (male or female):").toLowerCase();
    
    if (gender === "male") {
        alert(`Welcome, Mr. ${name}!`);
    } else if (gender === "female") {
        alert(`Welcome, Ms. ${name}!`);
    } else {
        alert(`Welcome, ${name}!`);
    }

    let drinkType = prompt("Would you like a hot or cold drink?").toLowerCase();
    let drinkNote = prompt("Any special request for your drink?");
    
    alert(`You ordered a ${drinkType} drink.`);
    console.log(`Order: ${name} ordered a ${drinkType} drink. Note: ${drinkNote}`);
});
