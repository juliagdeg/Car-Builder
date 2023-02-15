import { Wheels } from "./Wheels.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us!</h1>

        <article class="choices">
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__colors options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}