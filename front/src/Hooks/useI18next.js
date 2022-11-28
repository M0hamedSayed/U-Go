
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
const useI18next = () => {
    const { i18n, t } = useTranslation();

    let direction = i18n.dir();
    let language = i18n.language;

    const [dir, setDir] = useState(i18n.dir());
    const [lang, setLang] = useState(language);


    useEffect(() => {
        setDir(direction);
        document.body.dir = direction;
    }, [direction])

    useEffect(() => {
        setLang(language);
    }, [language])

    return [dir, t, i18n, lang];
}

export default useI18next;