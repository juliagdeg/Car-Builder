import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

const orderBuilder = (order) => {

const colors = getColors()

const foundColor = colors.find(
    (color) => {
        return color.id === order.colorId
    }
)

const interiors = getInteriors()

const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const techs = getTechnologies()

const foundTech = techs.find(
    (tech) => {
        return tech.id === order.technologyId // always make sure ur customOrder data matches the .id being matched here
    }
)

const wheels = getWheels()

const foundWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)

const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheel.price // not reading price for foundTech forward
    
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

return `<li>
    Order #${order.id} cost ${costString}
</li>`

};

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listCars = orders.map(orderBuilder)

    html += listCars.join("")
    html += "</ul>"

    return html
}

// getColors, getInteriors, getTechnologies, getWheels, 
// return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`