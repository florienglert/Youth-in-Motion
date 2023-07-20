import { YouthInMotion } from 'youthInMotion';

class YouthInMotion {
    constructor() {
        this.events = [];
    }

    registerEvent(event) {
        this.events.push(event);
    }

    getEvents() {
        return this.events;
    }
}

const youthInMotion = new YouthInMotion();

youthInMotion.registerEvent({
    name: 'Outdoor Adventure',
    date: '15/07/2018',
    location: 'Outdoor Hobbies, Inc.'
});

youthInMotion.registerEvent({
    name: 'Volunteer Day',
    date: '21/07/2018',
    location: 'Local Animal Shelter'
});

youthInMotion.registerEvent({
    name: 'Game Night',
    date: '22/07/2018',
    location: 'Teen Center'
});

youthInMotion.registerEvent({
    name: 'Pottery Workshop',
    date: '27/07/2018',
    location: 'Art Studio'
});

youthInMotion.registerEvent({
    name: 'Movie Night',
    date: '28/07/2018',
    location: 'Cinema'
});

youthInMotion.registerEvent({
    name: 'Rock Climbing',
    date: '29/07/2018',
    location: 'Rocks and Ropes'
});

youthInMotion.registerEvent({
    name: 'Dance Workshop',
    date: '03/08/2018',
    location: 'Dance School'
});

youthInMotion.registerEvent({
    name: 'Basketball Competition',
    date: '04/08/2018',
    location: 'Community Gym'
});

youthInMotion.registerEvent({
    name: 'Theate Workshop',
    date: '10/08/2018',
    location: 'Community Theater'
});

youthInMotion.registerEvent({
    name: 'Painting Class',
    date: '11/08/2018',
    location: 'Art Gallery'
});

youthInMotion.registerEvent({
    name: 'Cooking Techniques',
    date: '17/08/2018',
    location: 'Cooking School'
});

youthInMotion.registerEvent({
    name: 'Music Festival',
    date: '18/08/2018',
    location: 'Outdoor Venue'
});

youthInMotion.registerEvent({
    name: 'Chess Tournament',
    date: '20/08/2018',
    location: 'Local Club'
});

youthInMotion.registerEvent({
    name: 'Young Entrepreneurs',
    date: '24/08/2018',
    location: 'Business School'
});

youthInMotion.registerEvent({
    name: 'Dodgeball Tournament',
    date: '07/09/2018',
    location: 'Local Sports Center'
});

youthInMotion.registerEvent({
    name: 'Photography Workshop',
    date: '08/09/2018',
    location: 'Photography Studio'
});

youthInMotion.registerEvent({
    name: 'Video Game Night',
    date: '14/09/2018',
    location: 'Game Centre'
});

youthInMotion.registerEvent({
    name: 'Career Paths',
    date: '15/09/2018',
    location: 'Career Guidance Centre'
});

youthInMotion.registerEvent({
    name: 'Financial Literacy',
    date: '21/09/2018',
    location: 'Community Centre'
});

youthInMotion.registerEvent({
    name: 'Skateboarding',
    date: '22/09/2018',
    location: 'Skatepark'
});

youthInMotion.registerEvent({
    name: 'Leadership Summit',
    date: '28/09/2018',
    location: 'Leadership Centre'
});

youthInMotion.registerEvent({
    name: 'Baseball Competition',
    date: '29/09/2018',
    location: 'Baseball Park'
});

youthInMotion.registerEvent({
    name: 'Mentorship Program',
    date: '05/10/2018',
    location: 'YMCA'
});

youthInMotion.registerEvent({
    name: 'Robotics Competition',
    date: '06/10/2018',
    location: 'Tech Hub'
});

youthInMotion.registerEvent({
    name: 'Tennis Tournament',
    date: '12/10/2018',
    location: 'Tennis Center'
});

youthInMotion.registerEvent({
    name: 'Hacking Workshop',
    date: '13/10/2018',
    location: 'Hackerspace Studio'
});

youthInMotion.registerEvent({
    name: 'Creative Writing',
    date: '19/10/2018',
    location: 'Literature Club'
});

youthInMotion.registerEvent({
    name: 'Career Fair',
    date: '20/10/2018',
    location: 'Expo Center'
});

youthInMotion.registerEvent({
    name: 'Speech Competition',
    date: '26/10/2018',
    location: 'Local High School'
});

youthInMotion.registerEvent({
    name: 'Bike Race',
    date: '27/10/2018',
    location: 'Outdoor Track'
});

export default youthInMotion;