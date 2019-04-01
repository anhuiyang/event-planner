class EventList{
    constructor(events) {
        this.storageEvents = events || [];
        this.allObject = this.storageEvents.map(function(storageEvent){
            return new Event(storageEvent.jsDateTime, storageEvent.description)
        })
    }
    add(Event){
        this.allObject.push(Event);
        this.filter();
        this.sort()
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
        let ul = document.createElement('ul')
        this.allObject.map(function(event){
            ul.appendChild(event.stringFormat())
        })
        return ul
    }
}