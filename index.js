const _ = require("lodash")

// Use fake data or APIs you have worked with in previous projects or google fake data you can use. Either make a fetch or save it in a few variables.

const randomNumber = [
  3,
  76,
  55,
  77,
  74,
  19,
  93,
  20,
  58,
  9,
  13,
  38,
  93,
  13,
  27,
  47,
  44,
  20,
  80,
  93,
  12,
  3,
  88,
  92,
  20,
  21,
  16,
  57,
  12,
  7,
  62,
  79,
  60,
  93,
  15,
  58,
  1,
  21,
  56,
  51,
  37,
  10,
  98,
  4,
  25,
  76,
  28,
  8,
  72,
  97,
  27,
  59,
  16,
  6,
  64,
  61,
  40,
  0,
  33,
  69,
  87,
  37,
  52,
  31,
  74,
  11,
  46,
  98,
  64,
  17,
  28,
  48,
  48,
  85,
  38,
  19,
  3,
  95,
  11,
  44,
  46,
  49,
  39,
  32,
  96,
  17,
  24,
  15,
  55,
  63,
  83,
  92,
  62,
  55,
  73,
  42,
  33,
  80,
  63,
  74,
  97,
]

// Console.log the output of each lodash method called on the fake data.

console.log("chunk", _.chunk(randomNumber, 4))

console.log("reverse", _.reverse(randomNumber))

console.log("without", _.without(randomNumber, 58))

console.log("shuffle", _.shuffle(randomNumber))

console.log(
  "find last",
  _.findLast(randomNumber, function (n) {
    return n % 2 == 0
  })
)

console.log(
  "evens",
  _.remove(randomNumber, function (n) {
    return n % 2 == 0
  })
)
console.log("odds", randomNumber)

// Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().

// Create unit tests with Mocha for each function you build.
