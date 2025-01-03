//Search for TV Show:
const form = document.querySelector("#searchForm");
//Add async to use await.
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    //API Call:
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = " ";
})

const makeImages = (shows) => {
    for (let result of shows) {
        console.log(result)
        const img = document.createElement('IMG')
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}