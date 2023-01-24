import * as React from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import HistoryIcon from '@mui/icons-material/History';
import SearchedText from "./SearchedText";

export default function HistorySlider() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{
            height: 200,
            width: 200,
            position: "fixed",
            right: '0%',
            bottom: '20%'
        }}>
            <Box sx={{width: 300}}>
                <FormControlLabel
                    sx={{
                        position: 'fixed',
                        bottom: "5%",
                        right: "0%",
                        fontSize: 100,
                        color: 'blue'
                    }}
                    control={
                        <IconButton onClick={handleChange}>
                            <HistoryIcon sx={{
                                fontSize: 50,
                                color: 'blue'
                            }}/>
                        </IconButton>
                    }
                    label=""
                />
                <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                    <Box sx={{
                        height: 250,
                        minWidth: 200,
                        overflow: "auto",
                        position: "fixed",
                        right: '5%',
                        bottom: '50%',
                        backgroundColor: 'lightblue',
                    }}>
                        <SearchedText/>
                    </Box>
                </Slide>
            </Box>
        </Box>
    );
}
