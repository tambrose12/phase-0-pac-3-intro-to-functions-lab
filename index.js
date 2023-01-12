function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}


function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const lowerCase = string.toLowerCase();
    const upperCase = string.toUpperCase();
    const dinner = "Let's have dinner together!"

    if (string === lowerCase) {
        return("I can't hear you!")
    } else if (string === upperCase) {
        return("YES INDEED!")
    } else {
        return("I would love to!")
    }


}



// describe('sayHiToHeadphonedRoommate(string)', function() {
//     it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//       expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
//     })
  
//     it('returns "YES INDEED!" if `string` is uppercase', function() {
//       expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
//     })
  
//     it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
//       expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
//         "I would love to!"
//       );
//     });
//   })