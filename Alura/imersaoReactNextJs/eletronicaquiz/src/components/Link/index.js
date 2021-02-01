import React from 'react';
import NextLink from 'next/link';

// eslint-disable-next-line react/prop-types
export default function Link({ children, href, ...props }) {
    return (
        <NextLink href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}
