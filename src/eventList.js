'use strict'
class EventList{
    constructor() {
        this.all = []
        this.orderedComingEvents = []
    }
    add(newEvent){
        this.all.push(newEvent)
    }
    filter(){
        let filteredEvents = []
        this.all.forEach(function(event){
            event.dateTime > new Date ? filteredEvents.push(event) : ""
        })
        this.orderedComingEvents = filteredEvents
    }
}