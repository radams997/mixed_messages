let message = {
    sign: ['Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius'],
    luck: ['good luck', 'bad luck'],
    advice: ['Trust yourself', 'Trust no one', 'Enjoy the present']
};

const randomNum = num => {
    return Math.floor(Math.random() * num);
}

const randomMessage = () => {
    let messageContent = [];

    for (let key in message) {
        let optionIndex = randomNum(message[key].length);

        if (key === 'sign') {
            messageContent.push(`Your sign is ${message[key][optionIndex]}.`);
        } else if (key === 'luck') {
            messageContent.push(`You are having ${message[key][optionIndex]}.`);
        } else if (key === 'advice') {
            messageContent.push(`You should ${message[key][optionIndex]}.`);
        }
    }
    return messageContent.join(' ');
};

console.log(randomMessage());