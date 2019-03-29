// Functions used by multiple components

// Store today's date in a variable
export let todayDate = new Date();

// Calculate age by using today's date and birthdate
export const calculateAge = (dateString, today) => {
    let birthday = new Date(dateString);
    // Use .getFullYear method to set age variable by subtracting birth year from current year
    let age = today.getFullYear() - birthday.getFullYear();
    // Use .getMonth method to subtract birth month from current month
    let months = today.getMonth() - birthday.getMonth();
    // If months is less than 0 or if months = 0 and days in the current month is less than days in birth month, decrease age by a year
    if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    // If age comes back as not a number, return an empty string
    if (isNaN(age)) {
        return "";
    } else return age;
}