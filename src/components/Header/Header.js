import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import {Nested} from "./LanguageButtons/LanguageButtons"
import {LanguageButtons} from "./LanguageButtons/LanguageButtons";
import SearchInputs from "./SearchInputs/SearchInputs";


const Header = () => {


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box >
                        <Nested />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{marginLeft: '25px'}}
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Patron app!
                    </Typography>
                    <SearchInputs/>
                    <LanguageButtons/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;