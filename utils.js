import axios from "axios"

const GamesApi = axios.create({
    baseURL: "https://nc-games-1ybo.onrender.com/api"
})

export const getReviews = () => {
    let path = '/reviews'
    return GamesApi
    .get(path)
    .then(({data})=>{
        // console.log(data.review)
        return data.review
    })
}