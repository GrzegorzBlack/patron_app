import {SearchTextsProvider} from "../contexts/SearchTextsContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {SearchParamsProvider} from "../contexts/SearchParamsContext";
import {PageLanguageProvider} from "../contexts/PageLanguageContext";

const Providers = (props) => {
    return (
        <PageLanguageProvider>
            <SearchTextsProvider>
                <SearchParamsProvider>
                    <LanguageProvider>
                        {props.children}
                    </LanguageProvider>
                </SearchParamsProvider>
            </SearchTextsProvider>
        </PageLanguageProvider>
    );
};

export default Providers;