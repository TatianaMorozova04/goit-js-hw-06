import users from "./users.js";

const getSortedUniqueSkills = users => {

    return users
        .reduce((totalSkills, user) => {
            user.skills.forEach(skill => {
                const isPresent = totalSkills.includes(skill);
                !isPresent && totalSkills.push(skill);
            });
            return totalSkills;
        }, [])
        .sort();
};


console.log(getSortedUniqueSkills(users));


// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]