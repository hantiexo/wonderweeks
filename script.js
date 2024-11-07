function calculateWonderWeeks() {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
        alert("Please enter a birthdate.");
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    const ageInDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);
    const wonderWeeks = [5, 8, 12, 19, 26, 37, 46, 55, 64, 75]; // 주요 원더윅스 주차

    let resultText = `<p>Baby's age: ${ageInWeeks} weeks</p>`;
    let upcomingWonderWeek = null;

    for (let week of wonderWeeks) {
        if (ageInWeeks < week) {
            upcomingWonderWeek = week;
            break;
        }
    }

    if (upcomingWonderWeek) {
        const daysUntilWonderWeek = (upcomingWonderWeek * 7) - ageInDays;
        resultText += `<p>Next Wonder Week: ${upcomingWonderWeek} weeks (in ${daysUntilWonderWeek} days)</p>`;
    } else {
        resultText += "<p>No upcoming Wonder Weeks in the first year.</p>";
    }

    document.getElementById("result").innerHTML = resultText;
}
