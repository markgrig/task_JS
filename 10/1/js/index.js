const users = [
    {
        username: "David",
        status: "online" ,
        lastActivity: 10
    },
    {
        username: "Lacy",
        status: "offline" ,
        lastActivity: 22
    },
    {
        username: "Bob",
        status: "online" ,
        lastActivity: 104
    }
]

const usersOnline = users.filter( ( el ) => { 
    return el.status === "online" 
})

console.log(usersOnline);
const allUserOnline = usersOnline.map( el  => { 
    return el.username
}).join(', ')

console.log(allUserOnline);
alert(`Сейчас онлайн  следующие пользльзователи ${allUserOnline}`)