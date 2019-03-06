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
            event.jsDateTime > new Date ? filteredEvents.push(event) : ""
        })
        this.all = filteredEvents
    }
}