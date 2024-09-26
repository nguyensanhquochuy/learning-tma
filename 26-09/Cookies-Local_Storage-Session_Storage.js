// document.cookie = `name = Hao, expires = ${new Date('2024-09-27 12:30:40')}`
// document.cookie = `age = 30, expires = ${new Date('2024-09-27 12:30:40')}`
// console.log(document.cookie)  // --> type: string 

// localStorage.setItem('name', 'Hao')
// localStorage.setItem('age', 30)
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
// localStorage.clear()

sessionStorage.setItem('name', 'Hao')
sessionStorage.setItem('age', 30)
console.log(sessionStorage.getItem('name'))
// localStorage.removeItem('name')