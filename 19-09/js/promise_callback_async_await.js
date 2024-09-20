// function test() {
//     setTimeout(() => console.log(1), 0);
//     // setInterval(() => console.log(2), 3000);
//     console.log(3);
//     console.log(4);
// }
// test()
// function httpGetAsync(theUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     }
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
// }

// // CALLBACK hell --> solve: Promise
// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data);
//     document.getElementById("img2").setAttribute('src', data.responseURL);

//     httpGetAsync('https://picsum.photos/200/300', (data) => {
//         console.log(data);
//         document.getElementById("img3").setAttribute('src', data.responseURL);

//         httpGetAsync('https://picsum.photos/200/300', (data) => {
//             console.log(data);
//             document.getElementById("img4").setAttribute('src', data.responseURL);
//         })
//     })

// })

//PROMISE

function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', (resolve))
})

const currentPromise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', (resolve))
})

const currentPromise3 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', (resolve))
})

// currentPromise
//     .then((data) => {
//         console.log(data);
//         document.getElementById("img2").setAttribute('src', data.responseURL);
//         return currentPromise2;
//     })
//     .then((data) => {
//         document.getElementById("img3").setAttribute('src', data.responseURL);
//         return currentPromise3;
//     })
//     .then((data) => {
//         document.getElementById("img4").setAttribute('src', data.responseURL);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// ASYNC AWAIT
//await + promise
const executeAsync = async () => {
    const response = await currentPromise;
    document.getElementById("img2").setAttribute('src', response.responseURL);

    const response2 = await currentPromise2;
    document.getElementById("img3").setAttribute('src', response2.responseURL);

    const response3 = await currentPromise3;
    document.getElementById("img4").setAttribute('src', response3.responseURL);
}

executeAsync();


