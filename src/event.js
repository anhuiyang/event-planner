'use strict';
class Event{
    constructor(dateTime, description){
            this.description = description;
            this.jsDateTime = new Date(dateTime)
    }
}