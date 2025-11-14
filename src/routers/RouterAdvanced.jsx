// Nested Router (router lồng nhau)

import { BrowserRouter, Link, Outlet, Route, Routes, useParams } from "react-router-dom";

function Users() {
    return (
        <div>
            <h2>Users Page</h2>
            <Link to="1">User 1</Link> | {" "}
            <Link to="2">User 2</Link>

            <Outlet />
        </div>
    )
}

function UserDetail() {
    const { id } = useParams();
    return <h3>Detail of User {id}</h3>
}

export default function RouterAdvanced() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<Users />}>
                    <Route path=":id" element={<UserDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}