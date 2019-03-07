'use strict';
class EventList{
    constructor() {
        this.allObject = [];
        this.allString = [];
    }
    add(Event){
        this.allObject.push(Event);
        this.filter();
        this.sort();
        this.show();
    }
    filter(){
        this.allObject = this.allObject.filter(function(event){
            return event.jsDateTime > new Date;
        })
    }
    sort(){
        this.allObject.sort(function(eventA, eventB){
            return eventA.jsDateTime - eventB.jsDateTime;
        })
    }
    show(){
        this.allString = this.allObject.map(function(event){
            return(event.jsDateTime + " || " + event.description + "\n");
        })
    }
}