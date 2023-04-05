import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


import { logo } from "../util/constants";
import  SearchBar  from "./SearchBar";

const Navbar = () =>  (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2}
      sx={{position: "sticky", background: "#0F0F0F", top: 0, justifyContent: "space-between"}}
    >

    {/* Icon when clicking go to home page */}
    <Link to="/" sx={{display: "flex", alignItems: "center"}}>         {/*The align-items property will align the items on the cross axis. */}
      <Stack direction='row' alignItems='center'>
        <img src={logo} alt="logo" height={45}></img>
        <Typography sx={{fontFamily: 'Pathway Gothic One', fontSize: '40px', color: '#fff', ml: '5px', contentVisibility:{xs: 'hidden' ,sm: 'visible'} }}>
          MeTube
        </Typography>
      </Stack>
    </Link>
    

    
    
    <SearchBar />

    </Stack>
  )


export default Navbar