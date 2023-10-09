import React from 'react'
import { useNavigate } from "react-router-dom"
import NewsList from '../Components/NewsList';

function Category({ isCategoryMenuOpen, SetCategoryMenuOpen }) {
    const navigate = useNavigate();
    let Renders = 0;

    React.useEffect(() => {
        SetCategoryMenuOpen(false);
    }, [SetCategoryMenuOpen]);

    const Categorys = [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology"
    ]

    function FirstRender() {
        Renders++;
        const Current_Endpoint_Path = window.location.pathname.split('/').pop();
        if (Categorys.includes(Current_Endpoint_Path as string)) {
            if(isCategoryMenuOpen && Renders < 1) {
                SetCategoryMenuOpen(false);
            }
        } else {
            SetCategoryMenuOpen(true);
        }
    }

    React.useEffect(() => {
        FirstRender();
    });

    return <NewsList />
}

export default Category