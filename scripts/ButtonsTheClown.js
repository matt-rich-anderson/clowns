import { ServiceForm } from "./Form.js"
import { Requests } from "./Requests.js"

export const ButtonsTheClown = () => {
    return `
    
    <h1>Buttons the Clown</h1>
    <section>${ServiceForm()}</section>
    <section>${Requests()}</section>
    
    `
}