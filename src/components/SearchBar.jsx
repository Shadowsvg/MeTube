import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();         // to prevent the default reloading of page after submiting the form

    if(searchTerm) {
      navigate(`search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,                                  /*padding left */  
        boxShadow: "none",
        mr: { sm: 5}                            /* margin left for small devices*/
      }}
    >
    <input className="search-bar" placeholder='Search...' onChange={(e) => {setSearchTerm(e.target.value)}} value={searchTerm}></input>
    <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
      <Search />
    </IconButton>
     
    </Paper>
  )
}

export default SearchBar