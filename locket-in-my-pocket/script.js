function calculateDays() {
    const dateInput = document.getElementById('dateInput').value;
    const result = document.getElementById('result');
    
    // Parse the input date
    const inputDate = new Date(dateInput);
    
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
    result.textContent = `total numbers of songs, including today: ${daysDifference}`;
}
