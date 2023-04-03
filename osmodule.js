const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)
const surrentOS={
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemen: os.freemem(),
}
console.log(surrentOS)