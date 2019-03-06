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
        console.log(23)
        console.log(this.all)
        this.all.forEach(function(event){
            console.log(25)
            showEvents.push(event.dateTime + " || " + event.description)
            console.log(27)
        })
        console.log(29)
        console.log(showEvents)
        return showEvents
    }
}