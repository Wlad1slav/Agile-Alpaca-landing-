import React from 'react';

import './styles/heading.scss';

interface HeadingProps {
    children: React.ReactNode;
    subtext?: string;
    marginBottom?: 'huge' | 'large' | 'medium' | 'small' | 'little' | 'tiny';
}

interface HeadingInterface {
    [key: string]: (props?: HeadingProps) => JSX.Element | null;
}

const createHeading = (heading: 'h1' | 'h2' | 'h3') => (
    props?: HeadingProps
): JSX.Element | null => {

    if (!props) {
        return null;
    }

    const { children, subtext, marginBottom } = props;

    return (
        <div className={`heading indent-${marginBottom}`}>
            {subtext && <span className="subheading">{subtext}</span>}
            {heading === 'h1' && <h1>{children}</h1>}
            {heading === 'h2' && <h2>{children}</h2>}
            {heading === 'h3' && <h3>{children}</h3>}
        </div>
    );
}

const Heading: HeadingInterface = {
    h1: createHeading('h1'),
    h2: createHeading('h2'),
    h3: createHeading('h3')
}

export default Heading;
