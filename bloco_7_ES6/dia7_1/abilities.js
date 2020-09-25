const abilitiesArray = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Shell"
]
const ablitiesArrayOrder = abilitiesArray.sort((a,b) =>  a > b)
const name = "Denner"

const tryber = (name) => {
    return `Tryber ${name} aqui! Minhas 5 habilidades são: 
    *${ablitiesArrayOrder[0]}
    *${ablitiesArrayOrder[1]}
    *${ablitiesArrayOrder[2]}
    *${ablitiesArrayOrder[3]}
    *${ablitiesArrayOrder[4]}`
}
console.log(tryber(name))