import { useEffect, useState } from "react"
import { fetchNewsList } from "../../../../api/News.js"
import NewsCard from "./NewsCard.jsx"
import Container from "@mui/material/Container"

const News = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleFetchNewsList()
    }, [])

    const handleFetchNewsList = async () => {
        setLoading(true)
        const { data, status } = await fetchNewsList()
        console.log(data, status);
        setNews(data.news)
        setLoading(false)
    }

    return <>

        {
            loading
                ? "Loading latest news, Please wait"
                : news.map(n => (
                    <NewsCard
                        key={n._id}
                        title={n.title}
                        description={n.description}
                        source={n.source_title}
                        publishDate={n.pub_date}
                        link={n.link}
                    />
                ))
        }
    </>
}

export default News