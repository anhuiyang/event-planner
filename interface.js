'use strict'
let eventList = new evenList
function loadPage(){
    let timeInput = document.getElementById("timeINput").value
    let eventInput = document.getElementById("eventInput").value
    let sendButton = document.getElementById("sendButton")
    let eventsOnPage = document.getElementById("eventsOnPage")
    sendButton.onclick = function(){
        let newEvent = new Event(timeInput, eventInput)
        eventList.push(newEvent)
    }
    eventsOnPage = function(evenList){
        
    }
}
document.onload = loadPage()