// components/BottomNavBar.js
import Link from 'next/link';

const BottomNavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white p-4 flex justify-around items-center z-50">
            <Link href="/page1">
            </Link>
            <Link href="/page2">
            </Link>
            <Link href="/page3">
            </Link>
        </nav>
    );
};

export default BottomNavBar;
