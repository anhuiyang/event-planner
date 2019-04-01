function loadPage(){
    let timeInput = document.getElementById("timeInput");
    let eventInput = document.getElementById("eventInput");
    let sendButton = document.getElementById("sendButton");
    let showEvents = document.getElementById("showEvents");
    let clearButton = document.getElementById("clearEvents");
    let eventList = new EventList(JSON.parse(localStorage.getItem('eventList')));
        showEvents.appendChild(eventList.show());

        sendButton.onclick = function(){
            let newEvent = new Event(timeInput.value, eventInput.value);
                eventList.add(newEvent);
                localStorage.setItem('eventList', JSON.stringify(eventList.allObject));
                showEvents.innerText = '';
                showEvents.appendChild(eventList.show());
                timeInput.value = eventInput.value = ''
        }

        clearButton.onclick = function(){
            localStorage.clear();
            eventList.allObject = [];
            showEvents.innerText = ''

        }
}
document.addEventListener(`DOMContentLoaded`, loadPage)