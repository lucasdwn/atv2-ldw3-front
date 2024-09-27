'use client';

import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-black z-50">
            <Rings
                height="100"
                width="100"
                color="#5023b0"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    );
};

export default Loading;
