// shortcut to create a component :- rafce
// shortcut for indentation :- shift + alt + F
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from "./components";


const App = () =>  (
        <BrowserRouter>
            <Box sx={{backgroundColor: "#0F0F0F"}}>       {/* The sx prop is a shortcut for defining custom styles that has access to the theme */ }
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />}></Route>    {/* root path */}
                    <Route path="/video/:id" element={<VideoDetail />}></Route>
                    <Route path="/channel/:id" element={<ChannelDetail />}></Route>
                    <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
                </Routes>
            </Box>
        </BrowserRouter>
    );


export default App