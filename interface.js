'use strict';
let eventList = new EventList;
function loadPage(){
    let timeInput = document.getElementById("timeInput");
    let eventInput = document.getElementById("eventInput");
    let sendButton = document.getElementById("sendButton");
    let showEvents = document.getElementById("showEvents");
    sendButton.onclick = function(){
        let newEvent = new Event(timeInput.value, eventInput.value);
            eventList.add(newEvent);
            showEvents.innerText = eventList.allString.toString();
            timeInput.value = '';
            eventInput.value = ''
    }
}
document.onload = loadPage();