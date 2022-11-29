import { css } from '@emotion/css';
import tw from 'twin.macro';
import { useTranslation } from 'react-i18next';

const MainContent = ({ title }) => {
    const { t } = useTranslation();
    return (
        <div className={css([
            tw`bg-main rounded-t-3xl transition-colors duration-300`,
            { height: 'calc(100vh - 6rem)' }
        ])}>
            <div className='w-full h-full flex items-center justify-center'>
                <h1 className='text-primary-toggle text-4xl md:text-8xl transition-colors duration-300'>
                    {t(`${title}`)}
                </h1>
            </div>

        </div>
    )
}

export default MainContent;
