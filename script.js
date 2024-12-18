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
        return 'Andrea';
    } else if (firstLetter === 'b') {
        return 'Michonne';
    } else if (firstLetter === 'c') {
        return 'Rick';
    } else if (firstLetter === 'd') {
        return 'Daryl';
    } else if (firstLetter === 'e') {
        return 'Glenn';
    } else if (firstLetter === 'f') {
        return 'Carol';
    } else if (firstLetter === 'g') {
        return 'Dale';
    } else if (firstLetter === 'h') {
        return 'Negan';
    } else if (firstLetter === 'i') {
        return 'Carl';
    } else if (firstLetter === 'j') {
        return 'Lee';
    } else if (firstLetter === 'k') {
        return 'Ed';
    } else if (firstLetter === 'l') {
        return 'Maggie';
    } else if (firstLetter === 'm') {
        return 'Gregory';
    } else if (firstLetter === 'n') {
        return 'Hershel';
    } else if (firstLetter === 'o') {
        return 'Merle';
    } else if (firstLetter === 'p') {
        return 'Tyreese';
    } else if (firstLetter === 'q') {
        return 'Gabriel';
    } else if (firstLetter === 'r') {
        return 'Ezekiel';
    } else if (firstLetter === 's') {
        return 'Abraham';
    } else if (firstLetter === 't') {
        return 'Judith';
    } else if (firstLetter === 'u') {
        return 'Eugene';
    } else if (firstLetter === 'v') {
        return 'Sasha';
    } else if (firstLetter === 'w') {
        return 'Shane';
    } else if (firstLetter === 'x') {
        return 'Aaron';
    } else if (firstLetter === 'y') {
        return 'Alpha';
    } else if (firstLetter === 'z') {
        return 'Jesus';
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
        return 'Rhee';
    } else if (lastLetter === 'i') {
        return 'Grimes';
    } else if (lastLetter === 'o') {
        return 'Thorn';
    } else if (lastLetter === 'a') {
        return 'Walsh';
    } else if (lastLetter === 'b') {
        return 'Peletier';
    } else if (lastLetter === 'c') {
        return 'Greene';
    } else if (lastLetter === 'd') {
        return 'Dixon';
    } else if (lastLetter === 'f') {
        return 'Ford';
    } else if (lastLetter === 'g') {
        return 'Stookey';
    } else if (lastLetter === 'h') {
        return 'Williams';
    } else if (lastLetter === 'j') {
        return 'Jones';
    } else if (lastLetter === 'k') {
        return 'Stokes';
    } else if (lastLetter === 'l') {
        return 'Dog';
    } else if (lastLetter === 'm') {
        return 'Porter';
    } else if (lastLetter === 'n') {
        return 'Espinosa';
    } else if (lastLetter === 'p') {
        return 'Horvath';
    } else if (lastLetter === 'q') {
        return 'Martinez';
    } else if (lastLetter === 'r') {
        return 'Everett';
    } else if (lastLetter === 's') {
        return 'Lerner';
    } else if (lastLetter === 't') {
        return 'Milton';
    } else if (lastLetter === 'u') {
        return 'Harrison';
    } else if (lastLetter === 'v') {
        return 'Rovia';
    } else if (lastLetter === 'w') {
        return 'Frost';
    } else if (lastLetter === 'x') {
        return 'Clark';
    } else if (lastLetter === 'y') {
        return 'Anderson';
    } else if (lastLetter === 'z') {
        return 'Samuels';
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
