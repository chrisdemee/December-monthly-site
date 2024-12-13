// Generate prefix of name
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great';
    } else {
        return 'Master';
    }
}

// Generate first name
function genFirstname(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    if (firstLetter === 'a') {
        return 'Jeff';
    } else if (firstLetter === 'b') {
        return 'Devon';
    } else if (firstLetter === 'c') {
        return 'Rick';
    } else if (firstLetter === 'd') {
        return 'Daryl';
    } else {
        return 'Walter';
    }
}

// Generate middle name
function genMiddlename(RoadType, favoriteColor) {
    if (RoadType === 'Road') {
        return `${favoriteColor}ridge`;
    } else if (RoadType === 'Street') {
        return `${favoriteColor}son`;
    } else if (RoadType === 'Avenue') {
        return `${favoriteColor}field`;
    } else {
        return `${favoriteColor}stone`;
    }
}

// Generate last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
    if (lastLetter === 'e') {
        return 'Shadow';
    } else if (lastLetter === 'i') {
        return 'Stone';
    } else if (lastLetter === 'o') {
        return 'Thorn';
    } else if (lastLetter === 'a') {
        return 'Frost';
    } else {
        return 'Moon';
    }
}

// Generate suffix
function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal}`;
}

function genFullName() {
    // Define variables from inputs
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const RoadType = document.getElementById('RoadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    // Generate each part of name using function
    const prefix = genPrefix(firstName);
    const newFirstName = genFirstname(firstName);  // Fixed typo here
    const middleName = genMiddlename(RoadType, favoriteColor);  // Fixed typo here
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    // Functions to capitalize words
    const capitalizedPrefix = toCapitalize(prefix);
    const capitalizedFirstName = toCapitalize(newFirstName);
    const capitalizedMiddleName = toCapitalize(middleName);
    const capitalizedLastName = toCapitalize(newLastName);

    // Combine all parts to make a name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

    // Display the full name in the result div
    document.getElementById('result').textContent = fullName;
}

// Capitalizer function
function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
