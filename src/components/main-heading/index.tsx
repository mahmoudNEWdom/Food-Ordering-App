import React from 'react';

const MainHeading = ({title, SubTitle} : {title: string, SubTitle: string}) => {
    return (
        <div className="text-center mb-10">
        <span className="uppercase text-accent font-semibold leading-4">
            {SubTitle}
        </span>
        <h1 className="text-primary font-bold italic">
            {title}
        </h1>
        </div>
    );
}

export default MainHeading;
