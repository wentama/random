document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentDate();
    calculateDays();
});

function displayCurrentDate() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    document.getElementById('dateDisplay').textContent = `Current date: ${formattedDate}`;
}

function showDateInput() {
    document.getElementById('dateDisplay').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('selectDateButtonContainer').style.display = 'none';
    document.getElementById('dateInputContainer').style.display = 'block';
}

function returnToCurrentDate() {
    document.getElementById('dateInputContainer').style.display = 'none';
    document.getElementById('dateDisplay').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    document.getElementById('selectDateButtonContainer').style.display = 'flex';
    displayCurrentDate();
    calculateDays();
}

function calculateDays(useInputDate = false) {
    const dateInput = document.getElementById('dateInput').value;
    const result = document.getElementById('result');
    
    let inputDate;
    if (useInputDate) {
        inputDate = new Date(dateInput);
    } else {
        inputDate = new Date();
    }

    // Define the starting date
    const startDate = new Date('05/20/2024');
    
    // Check if the input date is valid
    if (isNaN(inputDate.getTime())) {
        result.textContent = "enter a valid date";
        return;
    }
    
    // Calculate the difference in days
    const timeDifference = inputDate - startDate;
    const daysDifference = (Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1) * 2;
    
    // Display the result
    if (useInputDate) {
        const formattedDate = `${inputDate.getMonth() + 1}/${inputDate.getDate()}/${inputDate.getFullYear()}`;
        document.getElementById('dateDisplay').textContent = `Selected Date: ${formattedDate}`;
        document.getElementById('dateDisplay').style.display = 'block';
        document.getElementById('result').style.display = 'block';
        document.getElementById('selectDateButtonContainer').style.display = 'flex';
        document.getElementById('dateInputContainer').style.display = 'none';
        result.textContent = `total numbers of songs, including selected date: ${daysDifference}`;
    } else {
        result.textContent = `total numbers of songs, including today: ${daysDifference}`;
    }
}
