import React from 'react'
import { css } from '@emotion/css';
import tw from 'twin.macro';

const MainContent = () => {
    return (
        <div className={css([
            tw`bg-main rounded-t-3xl transition-colors duration-300`,
            { height: 'calc(100vh - 6rem)' }
        ])}>
            <div className='w-full h-full flex items-center justify-center'>
                <h1 className='text-primary-toggle text-4xl md:text-8xl transition-colors duration-300'>Main Content</h1>
            </div>

        </div>
    )
}

export default MainContent;
