const wonderWeeks = [5, 8, 12, 19, 26, 37, 46, 55, 64, 75]; // 주요 원더윅스 주차

let currentYear, currentMonth;
let birthDate;

function initializeCalendar() {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
        alert("Please enter a birthdate.");
        return;
    }

    birthDate = new Date(birthdateInput);
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();

    renderCalendar();
}

function renderCalendar() {
    const calendarTitle = document.getElementById("calendar-title");
    const calendar = document.getElementById("calendar");

    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    calendar.innerHTML = "";

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
    }

    const ageInDays = Math.floor((new Date(currentYear, currentMonth, 1) - birthDate) / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        const dayAgeInWeeks = ageInWeeks + Math.floor(day / 7);
        if (wonderWeeks.includes(dayAgeInWeeks)) {
            dayElement.classList.add("wonder-week");
            dayElement.textContent += " (WW)";
        }

        calendar.appendChild(dayElement);
    }
}

function previousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else {
        currentMonth -= 1;
    }
    renderCalendar();
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    } else {
        currentMonth += 1;
    }
    renderCalendar();
}
