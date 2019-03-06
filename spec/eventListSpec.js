'use stric'
describe("eventList", function(){
    let event1
    let eventList
    beforeEach(function(){
        eventList = new EventList()
        event1 = {description: "Today", jsDateTime: new Date("2019-03-06T23:00")}
        event2 = {description: "Past", jsDateTime: new Date("2019-03-01T17:00")}
        event3 = {description: "Future", jsDateTime: new Date("2020-03-01T17:00")}
        event4 = {description: "Middle", jsDateTime: new Date("2019-10-06T17:00")}
    })
    it("can add new event to the list", function(){
        eventList.add(event1)
        expect(eventList.all.length).toBe(1)
    })
    it("will filter out passed events", function(){
        eventList.add(event1)
        eventList.add(event2)
        eventList.filter()
        expect(eventList.all.length).toBe(1)
    })
    it("will filter out passed events", function(){
        eventList.add(event1)
        eventList.add(event2)
        eventList.filter()
        expect(eventList.all.length).toBe(1)
    })
    it("will sort events chronologically", function(){
        eventList.add(event4)
        eventList.add(event2)
        eventList.add(event3)
        eventList.add(event1)
        eventList.filter()
        eventList.sort()
        expect(eventList.all).not.toContain(event2)
        expect(eventList.all[0].description).toEqual("Today")
        expect(eventList.all[1].description).toEqual("Middle")
        expect(eventList.all[2].description).toEqual("Future")
        console.log(eventList.all)
    })
    it("can format this.all to string", function(){
        eventList.add(event1)
        expect(eventList.show()).toEqual(["2019-03-06T23:00 || Today"])
    })
    
})