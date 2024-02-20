// Storing three arrays in an object. Message is the object. sign, luck, and advice are they keys.
let message = {
    sign: ['Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius'],
    luck: ['good luck', 'bad luck'],
    advice: ['Trust yourself', 'Trust no one', 'Enjoy the present']
};

// Function with num as the parameter to create a random number to be passed into randomMessage
const randomNum = num => {
    return Math.floor(Math.random() * num);
}

// Function to generate our message
const randomMessage = () => {
    //Array to store message
    let messageContent = [];

    //Iterate through object 
    for (let key in message) {
        // Takes randomNum function with parameter of our message object key length and saves it to optionIndex
        let optionIndex = randomNum(message[key].length);

        //Generate Message
        if (key === 'sign') {
            messageContent.push(`Your sign is ${message[key][optionIndex]}.`);
        } else if (key === 'luck') {
            messageContent.push(`You are having ${message[key][optionIndex]}.`);
        } else if (key === 'advice') {
            messageContent.push(`You should ${message[key][optionIndex]}.`);
        }
    }
    // Returns our joined message content array seperated by a space
    return messageContent.join(' ');
};

//Logs randomMessage
console.log(randomMessage());