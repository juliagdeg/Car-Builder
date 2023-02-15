import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += `<select id="wheel">`;
    html += `<option value="0">Select a wheel type</option>`

    const listItemsArray = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    }
)

    html += listItemsArray.join("")
    html += "</select>"

    return html
}