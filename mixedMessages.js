const nouns = [
    "apple",
    "banana",
    "car",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "hat",
    "ice cream",
    "jacket",
    "kite",
    "lion",
    "mountain",
    "notebook",
    "ocean",
    "piano",
    "quilt",
    "rocket",
    "sun",
    "tree",
    "umbrella",
    "violin",
    "whale",
    "xylophone",
    "yacht",
    "zebra",
    "book",
    "ball",
    "computer",
    "desk",
    "door",
    "cat",
    "cup",
    "chair",
    "fork",
    "house",
    "lamp",
    "moon",
    "pizza",
    "pen",
    "phone",
    "shirt",
    "sock",
    "table",
    "window",
    "lamp",
    "chair",
    "guitar",
    "river",
    "boat",
    "island",
    "cloud",
    "candle",
    "mirror",
    "shoes",
    "hat",
    "globe",
    "flower",
    "ring",
    "glasses",
    "painting",
    "helicopter",
    "bus",
    "truck",
    "bicycle",
    "train",
    "submarine",
    "skateboard",
    "balloon",
    "pencil",
    "bag",
    "clock",
    "key",
    "sword",
    "telescope",
    "spoon",
    "guitar",
    "violin",
    "book",
    "newspaper",
    "magazine",
    "camera",
    "hat",
    "umbrella",
    "glasses",
    "television",
    "radio",
    "microphone",
    "camera",
    "dress",
    "suit",
    "tie",
    "scarf",
    "ring",
    "necklace",
    "bracelet",
    "earrings",
    "computer",
    "phone",
    "pillow",
    "bed",
    "sofa",
    "couch",
    "table",
    "chair",
    "stool",
    "piano"
  ];
  
  const verbs = [
    "ran",
    "jumped",
    "swam",
    "sang",
    "danced",
    "read",
    "wrote",
    "climbed",
    "talked",
    "laughed",
    "ate",
    "slept",
    "studied",
    "worked",
    "played",
    "flew",
    "drove",
    "cycled",
    "painted",
    "cooked",
    "hiked",
    "surfed",
    "baked",
    "meditated"
  ];
  
  const prepositions = [
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "amid",
    "around",
    "as",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "between",
    "beyond",
    "but",
    "by",
    "concerning",
    "despite",
    "down",
    "during",
    "except",
    "for"
  ];
  
function createMessage() {
    let randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
    let randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
    let randomPreposition = prepositions[Math.floor(Math.random() * prepositions.length)]

    return console.log(`The ${randomNoun1} ${randomVerb} ${randomPreposition} the ${randomNoun2}.`)
}


createMessage()