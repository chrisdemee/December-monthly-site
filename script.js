//Define variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const RoadType = document.getElementById('RoadType').value
const firstName = document.getElementById('firstName').value.trim()
//Generate prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}