import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import React from "react";
import Category from "./Pages/Category";
import NewsList from "./Components/NewsList"

function App() {
    const [isCategoryMenuOpen, SetCategoryMenuOpen] = React.useState(false);

    return (
            <Navbar isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />
            <Routes>
                <Route path="/Home" element={<NewsList />} />
                <Route path="/Category/*" element={<Outlet />}>
                    <Route path="general" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="business" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="entertainment" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="health" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="science" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="sports" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="technology" element={<Category isCategoryMenuOpen={isCategoryMenuOpen} SetCategoryMenuOpen={SetCategoryMenuOpen} />} />
                    <Route path="*" element={<Navigate to={"/Category/general"} />} />
                </Route>
                <Route path="/Info" element={<div>Info</div>} />
                <Route path="/Settings" element={<div>Settings</div>} />
                <Route path="*" element={<Navigate to="/Home" />} />
            </Routes>
    )
}

export default App
export {
    Context
}
