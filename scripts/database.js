const database = {
    colors: [
        {id: 1, color: "silver", price: 5},
        {id: 2, color: "midnight blue", price: 400},
        {id: 3, color: "firetruck red", price: 12000},
        {id: 4, color: "spring green", price: 550}
    ],

    interiors: [
        {id: 1, style: "beige fabric", price: 2000},
        {id: 2, style: "charcoal fabric", price: 3000},
        {id: 3, style: "white leather", price: 7000},
        {id: 4, style: "black leather", price: 7000}
    ],

    technologies: [
        {id: 1, package: "basic package", price: 300},
        {id: 2, package: "navigation package", price: 600},
        {id: 3, package: "visibility package", price: 900},
        {id: 4, package: "ultra package", price: 1200}
    ],

    wheels: [
        {id: 1, type: "17-inch pair radial", price: 500},
        {id: 2, type: "17-inch pair radial black", price: 700},
        {id: 3, type: "18-inch pair spoke silver", price: 1000},
        {id: 4, type: "18-inch pair spoke black", price: 1300}
    ],

    customOrders: [
        {
        id: 1, 
        colorId: 1, 
        interiorId: 3, 
        technologyId: 2,
        wheelId: 4,
        timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

// export functions that capture each array within the database

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

// below are the foreign to primary key matchers that will help build custom orders
// returns the new object to the empty orderBuilder object in database

export const setColor = (id) => {
    return database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    return database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    return database.orderBuilder.wheelId = id
}

// this changes the state of each custom 

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}