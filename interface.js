'use strict'
let eventList = new EventList
function loadPage(){
    let timeInput = document.getElementById("timeInput")
    let eventInput = document.getElementById("eventInput")
    let sendButton = document.getElementById("sendButton")
    let showEvents = document.getElementById("showEvents")
    sendButton.onclick = function(){
        let newEvent = new Event(timeInput.value, eventInput.value)
        eventList.add(newEvent)
        eventList.filter()
        eventList.sort()
        showEvents.innerText = eventList.show()
        
        // let eventListNode = eventList.show()
        // let node = document.createElement("ul")
        // eventListNode.forEach(function(string){
        //     let textNode = document.createElement("li")
        //     node.appendChild(textNode)
        // })
        // showEvents.appendChild(node)   
    }
}
document.onload = loadPage()




