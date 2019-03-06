'use stric'
class Event{
    constructor(dateTime, description){
        this.dateTime = dateTime
        this.description = description
        this.jsDateTime = new Date(this.dateTime)
    }
}