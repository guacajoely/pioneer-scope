// C IS FOR COOKIE

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let i = 1; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONJUNCTION FUNCTION
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOD SQUAD


const modSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

console.log(HTMLRepresentation)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SIMON SAYS


const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    let invalidLocation

    if (location[0] > 1) {
        invalidLocation = true
    }
    
    if (invalidLocation) {
        console.log(`location ${location} is invalid`)
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LAMBDA LLAMA

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomNum = Math.floor(Math.random() * 7)

    let name
    const suffix = " the Llama"

    const nameSelector = function () {
        name = possibleNames[randomNum]
    }

    nameSelector()

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker)
