function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log("Valid email?", validateEmail("test@shack15.com"));


// Member feedback function (1)
let memberMessages = [];

function addMemberMessage(message) {
  memberMessages.push(message);
  return `Thanks for sharing: "${message}"`;
}
console.log(addMemberMessage("Loved the event yesterday! Great vibe."));
console.log(addMemberMessage("ONA was so much fun! Can't wait for their next event here"))


// What we offer aka Ammenties offered in the space function (2)
function listAmenities() {
  let amenities = ["Kafe", "Bar", "Complimentary Tea", "Meeting Rooms", "Bay Views"];
  return "Our amenities include: " + amenities.join(", ");
}
console.log(listAmenities());

// Function to count the amount of members attending a specific event (3)
function countMembers(members) {
  return members.length;
}
let eventAttendees = ["Ali", "Taylor", "Deijah"];
console.log(countMembers(eventAttendees));

eventAttendees.push("De'Ijah", "Rebecca", "Silas")
console.log(countMembers(eventAttendees));

eventAttendees.pop("Silas")
console.log(eventAttendees) // Returns both lengthb+ names



// Combine guest first and last names into full names (4)
function fullName(first, last) {
  return first + " " + last;
}
console.log(fullName("Sara", "Baker"));