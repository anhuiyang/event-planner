'use strict'
class EventList{
    constructor() {
        this.all = [];
    }
    add(Event){
        this.all.push(Event);
    }
    // var lucky = numbers.filter(function(number) {
    //     return number > 7;
    //   });

    filter(){
        this.all = this.all.filter(function(event){
            return event.jsDateTime > new Date
        })
    }
    sort(){
        this.all.sort(function(a, b){
            return a.jsDateTime - b.jsDateTime;
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