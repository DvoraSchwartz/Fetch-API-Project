//https://api.jikan.moe/v3/anime?q={name of anime}
//https://api.jikan.moe/v3/search/anime?q=dbz
let api = "https://api.jikan.moe/v3/search/";
let animeApi = `${api}anime`;
let objBox;
function getAnimeApi(nameOfAnime) {
  return fetch(`${animeApi}?q=${nameOfAnime}`).then(res => res.json())
    .catch(rej => console.log(rej))
}
// getAnimeApi('dbz').then(res =>{objBox = res.results[0].image_url
//   // categoryItemId.innerHTML= '<img src="res.results[0].image_url">'
//   categoryItemId.innerHTML = `<img src = "${objBox}">`
// })

async function searchAnime(title) {
  try {
    loadId.innerHTML =
'<img src = "https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif" alt ="Loading">'
    await getAnimeApi(title).then(res => { objBox = res })
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loadId.innerHTML = ''
  }
}
function searchCategItemsClick() {
  searchAnime(titleSearchedId.value).then(()=> {
    for (const iterator of objBox.results) {
      categoryItemId.innerHTML += `<img src ="${iterator.image_url}"/></br>
      Title:${iterator.title}</br>Synopsis:${iterator.synopsis}`
    }
  })
}