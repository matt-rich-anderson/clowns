import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    let requestList = `<ul>`
    requestList += requests.map( request => `<li>${request.parentName} has requested clowning services.</li>`).join(``)
    requestList += `</ul>`
    return requestList
}   
