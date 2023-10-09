import React from "react";
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea,
    Badge,
    Button
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
    article: {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        source: {
            name: string;
        };
    };
};

const NewsCard: React.FC<Props> = ({ article }) => {
    return (
        <Badge badgeContent={article?.source?.name} color="secondary">
            <Card variant="outlined" className="select-none flex flex-col gap-3 p-1" sx={{ borderRadius: "0.8rem" }}>
                {
                    article?.urlToImage === null ? (
                        <CardMedia className="rounded-xl" component="img" alt={article.title} image="/nonews.jpg" />
                    ) : <CardMedia className="rounded-xl" component="img" alt={article.title} image={article.urlToImage} />
                }
                <CardContent className="select-none flex flex-col gap-10">
                    <Typography variant="body2" color="text.secondary">
                        {article.description}
                    </Typography>
                    <Link target="_blank" to={article.url} className="self-end bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        Read More
                    </Link>
                </CardContent>
            </Card>
        </Badge>
    );
};

export default NewsCard;
