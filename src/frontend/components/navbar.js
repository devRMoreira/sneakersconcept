// components/BottomNavBar.js
import Link from 'next/link';
import React from 'react';

const BottomNavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around items-center">
            <Link href="/page1">
            </Link>
            <Link href="/page2">
            </Link>
            <Link href="/page3">
            </Link>
        </nav>
    );
};

export default React.memo(BottomNavBar)
