'use stric'
class Event{
    constructor(dateTime, description){
        this.dateTime = dateTime
        this.description = description
    }
    jsDateTime(){
        return new Date(this.dateTime)
    }
}