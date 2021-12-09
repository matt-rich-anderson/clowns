export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parent">Your Name</label>
            <input type="text" name="parent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="child">Child's Name</label>
            <input type="text" name="child" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address of Party Location</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
        <label class="label" for="attendingNum">Number Attending</label>
        <input type="number" name="attendingNum" class="input" />
        </div>
        <div class="field">
        <label class="label" for="length">Length</label>
        <input type="number" name="length" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date of Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const parent = document.querySelector("input[name='parent']").value
        const child = document.querySelector("input[name='child']").value
        const address = document.querySelector("input[name='address']").value
        const partyDate = document.querySelector("input[name='partyDate']").value
        const attendingNum = document.querySelector("input[name='attendingNum']").value
        const length = document.querySelector("input[name='length']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parent,
            childName: child,
            partyAddress: address,
            numAttendees: attendingNum,
            length: length,
            date: partyDate,

        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

// "parentName":"Jane Doe", "childName": "John Jr.", "numAttendees": 20, "date":"1/13/2022", "length": 2}
