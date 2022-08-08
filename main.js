AOS.init();

let randomButton = document.querySelector("#random_btn2"); 
randomButton.onclick = Randomization;

let randomButton2 = document.querySelector("#random_btn"); 
randomButton2.onclick = Randomization2;

function Randomization(){
   let randomIndex = Math.random();
   randomIndex *= StoryStarters.length;
   randomIndex = Math.floor(randomIndex);
   let randomResult = StoryStarters[randomIndex];
   console.log(randomResult);

//    let randomIndex2 = Math.random();
//    randomIndex2 *= data.length;
//    randomIndex2 = Math.floor(randomIndex2);
//    let randomResult2 = data[randomIndex2];
//    console.log(randomResult2);

//    let randomIndex3 = Math.random();
//    randomIndex3 *= data.length;
//    randomIndex3 = Math.floor(randomIndex3);
//    let randomResult3 = data[randomIndex3];
//    console.log(randomResult3);

//    let randomIndex4 = Math.random();
//    randomIndex4 *= data.length;
//    randomIndex4 = Math.floor(randomIndex4);
//    let randomResult4 = data[randomIndex4];
//    console.log(randomResult4);

//    let randomIndex5 = Math.random();
//    randomIndex5 *= data.length;
//    randomIndex5 = Math.floor(randomIndex5);
//    let randomResult5 = data[randomIndex5];
//    console.log(randomResult5);

//    let randomIndex6 = Math.random();
//    randomIndex6 *= data.length;
//    randomIndex6 = Math.floor(randomIndex6);
//    let randomResult6 = data[randomIndex6];
//    console.log(randomResult6);
   // console.log(randomResult.name);

//    let storyHeading = document.getElementById("Picture");
//    let pictureRandom = randomResult.picture.medium;
//    let img = document.createElement("img");
//    img.src = pictureRandom;
//    pictureHeading.innerHTML = "";
//    pictureHeading.appendChild(img);

let storyStarterHeading = document.getElementById("TheStarterWorldTypeYouGet");
if (randomResult.WorldType.SecondaryType === "None"){
    storyStarterHeading.innerHTML = `World type: ${randomResult.WorldType.FirstType}`
}
else
storyStarterHeading.innerHTML = `World type: ${randomResult.WorldType.FirstType}/${randomResult.WorldType.SecondaryType}`;

let storyStarterHeading2 = document.getElementById("TheStarterStory");
let StarterSentence = randomResult.StarterForStory;
storyStarterHeading2.innerHTML = `Starter Prologue: ${StarterSentence}`;
};

function Randomization2(){

let randomIndex2 = Math.random();
randomIndex2 *= PossibleCharacters.length;
randomIndex2 = Math.floor(randomIndex2);
let randomResult2 = PossibleCharacters[randomIndex2];
console.log(randomResult2);

let AgeRandomness = Math.random();
CharacterAge = (AgeRandomness*35);
SimplifiedAge = Math.floor(CharacterAge);

let CharAgeHeading = document.getElementById("CharacterAge");
if (SimplifiedAge < 12){
CharAgeHeading.innerHTML = `Age: ${SimplifiedAge+16}`
}
else CharAgeHeading.innerHTML = `Age: ${SimplifiedAge}`

let OurCharacterName = document.getElementById("ThyCharacterName");
let StarterName = randomResult2.RandomCharacter.CharName;
OurCharacterName.innerHTML = `Name: ${StarterName}`;

let OurCharacterGender = document.getElementById("CharacterGender");
let StarterGender = randomResult2.RandomCharacter.CharGender;
OurCharacterGender.innerHTML = `Gender: ${StarterGender}`;

let OurCharacterSpecies = document.getElementById("Species");
let StarterSpecies = randomResult2.RandomCharacter.Species;
OurCharacterSpecies.innerHTML = `Species: ${StarterSpecies}`;
}