const applicationState = {}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then(
            (requests) => {
                // Store the external state in application state
                applicationState.partyRequests = requests
            }
        )
}