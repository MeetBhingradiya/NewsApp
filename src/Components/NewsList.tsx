import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    CircularProgress,
    Backdrop,
    Button,
    Grid
} from "@mui/material";
import NewsCard from "./NewsCard";
import {
    Replay
} from "@mui/icons-material";
import { News_Json } from "./TestNews";

const API_KEY = import.meta.env.NEWS_API_KEY || "<API_KEY>"
const API_URL = "https://newsapi.org/v2/top-headlines";
const _Category = "general";
const country = "in";

interface Article {
    title: string
    description: string
    url: string
    urlToImage: string
    source: {
        name: string
    }
}

type Props = {
    Category?: "general" | "business" | "entertainment" | "health" | "science" | "sports" | "technology"
};

const NewsList: React.FC<Props> = ({ Category }) => {
    const [articles, setArticles] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const Renders = React.useRef(0);

    const Categorys = [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology"
    ]

    function getURL_Category() {
        const Current_Endpoint_Path = window.location.pathname.split('/').pop();
        if (Categorys.includes(Current_Endpoint_Path as string)) {
            return Current_Endpoint_Path;
        } else {
            return _Category;
        }
    }

    // ? Production
    // async function ImportData() {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`${API_URL}?country=in&category=${getURL_Category()}&apiKey=${API_KEY}`);
    //         setArticles(response.data.articles);
    //     } catch (error) {
    //         console.error("Error fetching data: ", error);
    //         setArticles(News_Json.articles);
    //     } finally {
    //         setLoading(false);
    //         Renders.current++;
    //     }
    // }

    // ? Development
    function ImportData() {
        setLoading(true);
        setArticles(News_Json.articles);
        setLoading(false);
    }

    useEffect(() => {
        if (Renders.current === 0) {
            ImportData();
        }

        console.log("Renders: ", Renders.current);
    });

    return (
        <>
            {
                loading && <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
            <div className="p-5 mx-3 my-3" style={{ borderRadius: "0.8rem", border: "1px solid rgba(12,74,110,0.0.01)" }}>
                <Button onClick={ImportData}>
                    <Replay />
                    Refresh
                </Button>
            </div>
            {
                !loading && articles.length === 0 && <div>No articles found.</div>
            }
            {
                !loading && articles.length > 0 &&
                <Grid
                    container spacing={10} padding={10}
                >
                    {articles.map((article: Article, index: number) => (
                        <Grid item xs={5} sm={6} md={4} key={index}>
                            <NewsCard article={article} />
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    );
};

export default NewsList;
