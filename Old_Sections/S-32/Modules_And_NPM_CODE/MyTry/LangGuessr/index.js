// import { franc, francAll } from 'franc'

// franc('Alle menslike wesens word vry') //=> 'afr'
// franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট') //=> 'ben'
// franc('Alle menneske er fødde til fridom') //=> 'nno'

// franc('') //=> 'und' (language code that stands for undetermined)

// // You can change what’s too short (default: 10):
// franc('the') //=> 'und'
// franc('the', { minLength: 3 }) //=> 'sco'

// console.log(francAll('Considerando ser essencial que os direitos humanos'))
// //=> [['por', 1], ['glg', 0.771284519307895], ['spa', 0.6034146900423971], …123 more items]

// console.log(francAll('Considerando ser essencial que os direitos humanos', { only: ['por', 'spa'] }))
// //=> [['por', 1 ], ['spa', 0.6034146900423971]]

// console.log(francAll('Considerando ser essencial que os direitos humanos', { ignore: ['spa', 'glg'] }))
// //=> [['por', 1], ['cat', 0.5367251059928957], ['src', 0.47461899851037015], …121 more items]



// "Alle menslike wesens word vry"



import { franc } from "franc";
import langs from "langs";

const text = 'এটি একটি ভাষা একক IBM স্ক্রিপ্ট'; // Example text
const langCode = franc(text); // Detect the language code

if (langCode === "und") {
    console.log("Language could not be detected. Try providing more text.");
} else {
    const language = langs.where("3", langCode); // Get full language details
    console.log(`Detected Language: ${language.name}`);
}


// import { franc, francAll } from 'franc'
// import langs from 'langs'
// // const langs = require("langs");

// console.log(franc('Alle menslike wesens word vry'))
