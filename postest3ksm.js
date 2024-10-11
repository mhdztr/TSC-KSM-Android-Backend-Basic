let siswa1 = {
    nama    : "Tono",
    usia    : 20,
    nilai   : [90, 85, 88]
}

let siswa2 = {
    nama    : "Tini",
    usia    : 22,
    nilai   : [78, 82, 85]
}
let rata = (siswa1.usia + siswa2.usia) /2

let mergedStudent = {
    nama    : `${siswa1.nama} dan ${siswa2.nama}`,
    age     : rata,
    nilai   : [...siswa1.nilai, ...siswa2.nilai]
};
console.log (`nama: "${mergedStudent.nama}"`);
console.log (`age: ${mergedStudent.age}`);
console.log (`niai: [${mergedStudent.nilai}]`);


// Soal Nomor 2 ----------------------------------------------------------------------

const Fav = {
    user: {
        id: 1,
        name: "Zakkieh",
        age: 18,
        favorites: {
            books: ["The Death of Expertise", "God Emperor of Dune"],
            movies: ["Maharaja", "Oppenheimer", "The Social Dilemma"],

        },
    },
};

let {name, age} = Fav.user;
let {movies}= Fav.user.favorites;

console.log (name);
console.log (age);
console.log (movies);

// Soal Nomor 3 -------------------------------------------------------------------------

const Event = {
    EventName: "Workshop KSM Android",
    date: "2024-10-10",
    attendees: ["Valtrizt", "Billy"],
}

function addAttendees(Event, newAttendees) {
    let {EventName, date, attendees} = Event;
    return {
        EventName, date, attendees: [...attendees, ...newAttendees]
    };

}

const newAttendees = ["Zakki", "Pak Dengklek"];
const updatedEvent = addAttendees(Event, newAttendees);
console.log (updatedEvent);