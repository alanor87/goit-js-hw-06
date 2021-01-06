import users from "./users.js";

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);
console.log(getUsersWithGender(users, 'male'));

const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);
console.log(calculateTotalBalance(users));

const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

const getNamesSortedByFriendsCount = users => {
    return users
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = users => {
    return users
        .reduce((totalSkills, user) => { totalSkills.push(...user.skills); return totalSkills }, [])
        .reduce((uniqueSkills, skill) => { if (!uniqueSkills.includes(skill)) uniqueSkills.push(skill); return uniqueSkills }, [])
        .sort();
}
console.log(getSortedUniqueSkills(users));