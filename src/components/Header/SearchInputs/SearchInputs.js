import React, {useContext, useEffect} from "react";

import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import {SearchParamsContext} from "../../../contexts/SearchParamsContext";
import {SearchTextsContext} from "../../../contexts/SearchTextsContext";
import {LanguageContext} from "../../../contexts/LanguageContext";

import searchPagesAPI from "../../../apiCalls/searchPagesAPI";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchInputs = () => {
    const [searchParams, setSearchParams] = useContext(SearchParamsContext);
    const [language] = useContext(LanguageContext);
    const [searchTexts, setSearchTexts] = useContext(SearchTextsContext);

    useEffect(() => {
        window.localStorage.setItem('searchHistory', JSON.stringify(searchTexts));
    }, [searchTexts])

    const handleChangeLimits = e => {
        setSearchParams({
            ...searchParams,
            limit: e.target.value
        })
    };

    const handleSearchTextChange = e => {
        setSearchParams({
            ...searchParams,
            searchText: e.target.value
        })
    };

    const handleSearch = e => {
        if (e.keyCode === 13 && searchParams.searchText) {
            searchPagesAPI(
                searchParams.searchText,
                searchParams.limit,
                language,
                handleSearchResults
            );
            setSearchTexts([...searchTexts, searchParams.searchText])
        }
    };

    const handleSearchResults = results => {
        setSearchParams({
            ...searchParams,
            searchText: '',
            results
        });
    };

    return (
        <>
            <Box>
                <FormControl fullWidth sx={{minWidth: 120}}>
                    <InputLabel id="pageItems">Page items</InputLabel>
                    <Select
                        labelId="pageItems"
                        value={searchParams.limit}
                        onChange={handleChangeLimits}
                        label="Age"
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Search style={{marginRight: "25px"}}>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    onKeyDown={handleSearch}
                    value={searchParams.searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Search…"
                />
            </Search>
        </>
    )
}

export default SearchInputs