
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24) + 1;

const getDaysBeforeBirthday = (birthdayDate) => {
    const currentDateMs = Date.now();
    const birthdayDateMs = birthdayDate.getTime();
    return convertMsToDays(birthdayDateMs - currentDateMs);
}

console.log(getDaysBeforeBirthday(new Date(2022, 10, 1)))