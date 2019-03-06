'use stric'
describe("eventList", function(){
    let event1
    let eventList
    beforeEach(function(){
        eventList = new EventList()
        event1 = {dateTime: "2019-03-06T17:00", description: "Group retro"}
    })
    it("can add new event to the list", function(){
        eventList.add(event1)
        expect(eventList.all.length).toBe(1)
    })
    it("will show all event's", function(){
        eventList.add(event1)
        expect(eventList.show).toBe([event1])
    })
})