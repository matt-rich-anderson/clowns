import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()