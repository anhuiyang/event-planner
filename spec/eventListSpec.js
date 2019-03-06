'use stric'
describe("eventList", function(){
    let event1
    let eventList
    beforeEach(function(){
        eventList = new EventList()
        event1 = {dateTime: "2019-03-06T17:00", description: "Group retro"}
        event2 = {dateTime: "2019-03-01T17:00", description: "Passed event"}

    })
    it("can add new event to the list", function(){
        eventList.add(event1)
        console.log(eventList.all[0])
        expect(eventList.all.length).toBe(1)
    })
    it("will filter out passed events", function(){
        eventList.add(event1)
        eventList.add(event2)
        eventList.filter()
        expect(eventList.orderedComingEvents.length).toBe(1)
    })
})