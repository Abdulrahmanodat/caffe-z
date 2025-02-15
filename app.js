document.getElementById("orderBtn").addEventListener("click", function () { 
    let name = prompt("Enter your name:");
    if (!name) {
        alert("You must enter a name!");
        return;
    }

    let gender = prompt("Enter your gender (male or female):").trim().toLowerCase();
    let salutation = "";

    if (gender === "male") {
        salutation = `Mr. ${name}`;
    } else if (gender === "female") {
        salutation = `Ms. ${name}`;
    } else {
        salutation = name;
    }

    let drinkType = prompt("Would you like a hot or cold drink?").trim().toLowerCase();
    if (drinkType !== "hot" && drinkType !== "cold") {
        alert("Invalid choice! Please enter 'hot' or 'cold'.");
        return;
    }

    let drinkNote = prompt("Any special request for your drink?") || "No special requests.";
    let orderDiv = document.getElementById("orderSummary");
    orderDiv.innerHTML = `
        <p><strong>Name:</strong> ${salutation}</p>
        <p><strong>Drink:</strong> ${drinkType} drink</p>
        <p><strong>Special Request:</strong> ${drinkNote}</p>`;
    console.log(`Order Summary: ${salutation} ordered a ${drinkType} drink. Note: ${drinkNote}`);
});
