import axios from "axios"

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTExMTExMTExMTExMTExMTExMTExMTEiLCJpYXQiOjE1OTc0NzQzNjZ9.ClGMsKxmiktedx11Mn-iG4dkW825RTzHXfc0Iuno_ms"

export const fetchNewsList = () => {

    return axios.get("https://bourse.hooshdadeh.ir:50001/v2/news?page=1", {
        headers: {
            Authorization: token
        }
    })
} 