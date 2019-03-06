'use strict'
class EventList{
    constructor() {
        this.all = []
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
    sort(){
        this.all.sort(function(a, b){
            return a.jsDateTime - b.jsDateTime
        })
    }
    show(){
        let showEvents = []
        this.all.forEach(function(event){
            showEvents.push(event.dateTime + " || " + event.description + "\n")
        })

        return showEvents
    }
}