const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        tags: ['AAA', 'BBB']
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        tags: ['BBB']
    },
    {
        id: 9,
        email: "clara.chung@reqres.in",
        first_name: "Clara",
        last_name: "Chung",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        tags: ['CCC', 'BBB']
    },
    {
        id: 10,
        email: "abigail.patton@reqres.in",
        first_name: "Abigail",
        last_name: "Patton",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        tags: ['AAA']
    },
    {
        id: 11,
        email: "timothy.lee@reqres.in",
        first_name: "Timothy",
        last_name: "Lee",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        tags: ['AAA', 'CCC']
    },
    {
        id: 12,
        email: "victoria.nguyen@reqres.in",
        first_name: "Victoria",
        last_name: "Nguyen",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        tags: ['DDD']
    }
];


// FILTER
// const filterUser = users.filter((user) => {
//     return user.first_name === 'Lindsay' || user.first_name == 'Victoria';
// });

// FIND -> tra ve phan tu dau tien thoa man dieu kien -> sau do thoat ra
const findUser = users.find((user) => {
    return user.first_name === 'Lindsay' || user.first_name == 'Victoria';
});

// MAP
const mapUser = users.map(user => {
    return {
        ...user,
        last_name: `${user.last_name} Edited`
    };
})

// SOME: tra ve true neu it nhat 1 phan tu thoa man dk
// EVERY: nguoc lai vs SOME

const filterUser = users.filter((user) => {
    return user.tags.some(tag => {
        return tag === 'BBB';
    })
});

// REDUCE(callback(acc,cur) , init value), accumulate: tich luy, current: gia tri hien tai

/*
=> {
    [email]: {
        id: ...,
        email: ...
        }
    }
*/
const customUsers = users.reduce((acc, cur) => {
    return { ...acc, [cur.email]: cur }
}, {})

console.log(customUsers);

const arrayUsers = Object.values(customUsers).reduce((acc, cur) => {
    return [...acc, cur.email]
}, [])

console.log(arrayUsers);

const number = [1, 2, 3, 4, 5];
const total = number.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log({ total })
console.log({ filterUser, findUser, mapUser })