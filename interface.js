'use strict'
let eventList = new evenList
function loadPage(){
    let timeInput = document.getElementById("timeInput").value
    let eventInput = document.getElementById("eventInput").value
    let sendButton = document.getElementById("sendButton")
    let showEvents = document.getElementById("showEvents")
    sendButton.onclick = function(){
        let newEvent = new Event(timeInput, eventInput)
        eventList.push(newEvent)
        eventList.filter()
        eventList.sort()
    }
    
    showEvents.appendChild(list)    
}
document.onload = loadPage()