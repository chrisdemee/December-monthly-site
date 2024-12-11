
//Generate prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate first name
function genFirstname (firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   if (firstLetter === 'a') {
    return 'Jeff'
   } else if (firstLetter === 'b') {
    return 'Devon' 
} else if (firstLetter === 'c') {
    return 'Rick'
     }
     else if (firstLetter === 'd') {
        return 'Daryl'
         }
         else  {
            return 'Walter'
             }

}

//Generate middle name
function genMiddlename (RoadType, favoriteColor){
    if (RoadType === 'road'){
        return `${favoriteColor}ridge`
    } else if (RoadType === 'street') {
        return `${favoriteColor}son`
    } else if (RoadType === 'ave') {
        return `${favoriteColor}field`
    } else {
        return `${favoriteColor}stone`
    }
}

function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter === 'e') {
        return 'Shadow'
    } else if (lastLetter === 'i') {
        return 'Stone'
    } else if (lastLetter === 'o') {
        return 'Thorn'
    }    else if (lastLetter === 'a') {
        return 'Frost'
    } else  {
        return 'Moon'
    }
}
//generate suffix
function genSuffix (favoriteAnimal){
    return `of the ${favoriteAnimal}`
}
function genFullName () {
//Define variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const RoadType = document.getElementById('RoadType').value
const favoriteColor = document.getElementById('favoriteColor').value.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

//Generate each part of name using function 
const prefix = genPrefix(firstName)
const newFirstName = genfirstName(firstName)
const middleName = genmiddleName(RoadType, favoriteColor)
const newLastName = genLastName(lastName)
const suffix = genSuffix(favoriteAnimal)
}