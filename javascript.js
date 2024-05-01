let love = async () => {

    let prm1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let press = "Initializing hack program..."
            let i = 0
            setInterval(() => {
                document.getElementById("hacker").innerHTML += press.charAt(i)
                i++
            }, 28);
            resolve()
        }, 1000);
    })

    let jac1 = await prm1

    let prm2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let press2 = "Hacking Aryan's username..."
            let x = 0
            document.getElementById("hacker").innerHTML += "<br>"
            setInterval(() => {
                document.getElementById("hacker").innerHTML += press2.charAt(x)
                x++
            }, 28);
            resolve()
        }, 1000);
    })
    
    let jac2 = await prm2
    
    let prm3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("hacker").innerHTML += "<br>"
            let press3 = "Username found singh_aryan05!"
            let y = 0
            setInterval(() => {
                document.getElementById("hacker").innerHTML += press3.charAt(y)
                y++
            }, 28);
            resolve()
        }, 1000);
    })

    let jac3 = await prm3

    let prm4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let press4 = "Connecting to instagram..."
            let z = 0
            document.getElementById("hacker").innerHTML += "<br>"
            setInterval(() => {
                document.getElementById("hacker").innerHTML += press4.charAt(z)
                z++
            }, 28);
            resolve()
        }, 1000);
    })
    
    let jac4 = await prm4

    let prm5 = new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("hck2").innerHTML += "U'VE BEEN COMPROMISED!"
            resolve()
        }, 2000);
    })
}
love() 