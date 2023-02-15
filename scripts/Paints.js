import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)
export const Paints = () => {
    let html = "<h2>Paint Options</h2>"

    html += `<select id="color">`;
    html += `<option value="0">Select a color</option>`

    const listItemsArray = colors.map( (color) => {
        return `<option value="${color.id}">${color.color}</option>`
    }
)

    html += listItemsArray.join("")
    html += "</select>"

    return html
}