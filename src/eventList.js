'use strict'
class EventList{
    constructor() {
        this.all = []
        this.orderedComingEvents = []
    }
    add(newEvent){
        this.all.push(newEvent)
    }
}