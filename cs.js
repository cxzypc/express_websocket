const path = require('path')
const fs = require('fs')

// 本机存储路径
const localybrainFolder = "C:\\Users\\Administrator\\Desktop\\websocket&server\\ybfile"

const a1 = async () => {
    let xiao = new Promise((resolve, reject) => {
        setTimeout(async () => {
            resolve(Reflect.apply(returnvalue, a1, [66]))
        }, 2000)
    })
    return xiao
}

a1().then((res) => {
    console.log(res)
})

function returnvalue(vaule) {
    return vaule
}

// const a1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(async () => {
//             resolve(66)
//         }, 2000)

//     })
// }
// a1().then((res) => {
//     console.log(res)
// })