// Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.
// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// •	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0].
// •	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0].
// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!


function guineaPig(arr) {
    let food = Number(arr[0]) * 1000; 
    let hay = Number(arr[1]) * 1000;
    let cover = Number(arr[2]) * 1000;
    let weight = Number(arr[3]) * 1000;

    let coverConsume = weight / 3;
        
    for ( let day = 1; day <= 30; day ++){
        food -= 300;

        if (day % 2 == 0){
            hay -= food * 0.05;
        }

        if (day % 3 == 0){
            cover -= coverConsume;
        }

        if (food <= 0 || hay <= 0 || cover <= 0){
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }

    console.log(
        `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
        );
}

guineaPig(["10",
    "5",
    "5.2",
    "1"])

// guineaPig(["1",
//     "1.5",
//     "3",
//     "1.5"])

// guineaPig(["9",
//     "5",
//     "5.2",
//     "1"]);