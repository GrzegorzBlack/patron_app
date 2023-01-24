import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import {PageLanguageContext} from "../contexts/PageLanguageContext";
import {LanguageContext} from "../contexts/LanguageContext";

import getHtmlPageAPI from "../apiCalls/getHtmlPageAPI";
import getPageLanguagesAPI from "../apiCalls/getPageLanguagesAPI";

const Page = () => {
    let {title} = useParams();
    const [language] = useContext(LanguageContext);
    const [page, setPage] = useState(null);
    const [backButtonClicked, setBackButtonClicked] = useState(false);
    const [otherLanguage, setOtherLanguage] = useState({
        code: language,
        name: language === 'en' ? 'English' : 'Polski',
        title: title
    });
    const [pageLanguages, setPageLanguages] = useContext(PageLanguageContext);
    const navigation = useNavigate()

    useEffect(() => {
        getHtmlPageAPI(otherLanguage.code, otherLanguage.title, setPage);
        getPageLanguagesAPI(otherLanguage.code, otherLanguage.title, setPageLanguages);
    }, [otherLanguage, setPageLanguages])

    useEffect(() => {
        if (page === null && backButtonClicked) {
            navigation('/');
        }
    }, [navigation, page, backButtonClicked])

    const handleChange = e => {
        const code = e.target.value;
        const selectedLanguage = pageLanguages.find(singleLanguage => singleLanguage.code === code);
        setOtherLanguage({
            code: selectedLanguage.code,
            name: selectedLanguage.name,
            title: selectedLanguage.title
        })
    };

    const handleBackToMainMenu = () => {
        setPage(null);
        setBackButtonClicked(true);
    };

    const mappedLanguages = pageLanguages.map(obj => <MenuItem value={obj.code} key={obj.code}>{obj.name}</MenuItem>);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "50px"
            }}>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={handleBackToMainMenu}
                    >
                        Go to main site
                    </Button>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel>Language</InputLabel>
                        <Select
                            value={otherLanguage.code}
                            label="Language"
                            onChange={handleChange}
                        >
                            <MenuItem value={otherLanguage.code}
                                      key={otherLanguage.code}>{otherLanguage.name}</MenuItem>
                            {mappedLanguages}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {page ? <div dangerouslySetInnerHTML={{__html: page}} style={{margin: "0 60px"}}/> : <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
        </div>
    )
}

export default Page;