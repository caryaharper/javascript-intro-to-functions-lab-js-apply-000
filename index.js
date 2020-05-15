function shout ( string ) {
return string.toUpperCase ()
}

function whisper ( string ) {
<<<<<<< HEAD
  return string.toLowerCase ()
}

function logShout ( string ) {
  console.log (string.toUpperCase ())
}

function logWhisper ( string ) {
  console.log (string.toLowerCase ())
}

function sayHiToGrandma ( string ) {
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}

=======
  return string.toLowerCase
}
>>>>>>> 729864d8364a62a05a61886c6cd5d763e6959b02
