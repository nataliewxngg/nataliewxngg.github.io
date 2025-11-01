import TechStackItem from './TechStackItem'

import {
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiLanguageJavascript,
    mdiLanguagePython,
    mdiLanguageJava,
    mdiLanguageCpp,
    mdiLanguageCsharp
} from '@mdi/js';

function TechStack() {
    return <article className='text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] flex flex-wrap
                                2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-xs'
                    data-aos='fade-up'>
        <TechStackItem img={mdiLanguageHtml5} language='HTML' />
        <TechStackItem img={mdiLanguageCss3} language='CSS' />
        <TechStackItem img={mdiLanguageJavascript} language='JavaScript' />
        <TechStackItem img={mdiLanguagePython} language='Python' />
        <TechStackItem img={mdiLanguageJava} language='Java' />
        <TechStackItem img={mdiLanguageCpp} language='C++' />
        <TechStackItem img={mdiLanguageCsharp} language='C#' />
    </article>
}

export default TechStack;