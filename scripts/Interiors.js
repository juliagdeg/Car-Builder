import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interior</h2>"

    html += `<select id="interior">`;
    html += `<option value="0">Select an Interior Style</option>`

    const listItemsArray = interiors.map( (interior) => {
        return `<option value="${interior.id}">${interior.style}</option>`
    }
)

    html += listItemsArray.join("")
    html += "</select>"

    return html
}