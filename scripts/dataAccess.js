const applicationState = {}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then((requests) => {
                applicationState.partyRequests = requests
            }
        )
}

export const getRequests = () => {
    return applicationState.partyRequests.map(request => ({...request}))
}