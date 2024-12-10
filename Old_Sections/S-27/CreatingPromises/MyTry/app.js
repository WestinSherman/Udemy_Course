const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE")
            }
            reject("Request Error!");
        }, 1000)
    })
}

fakeRequest("/dogs/1")
    .then(() => {
        console.log("DONE WITH REQUEST!")
        console.log("data is:", data)
    })
    .catch(() => {
        console.log("OH NO!, err")
    })