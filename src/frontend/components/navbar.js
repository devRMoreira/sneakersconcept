// components/BottomNavBar.js
import Link from 'next/link';

const BottomNavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around items-center">
            <Link href="/page1">
                <div className="text-white hover:text-gray-300">
                    <img src="/icon1.png" alt="Icon 1" className="w-6 h-6" />
                </div>
            </Link>
            <Link href="/page2">
                <div className="text-white hover:text-gray-300">
                    <img src="/icon2.png" alt="Icon 2" className="w-6 h-6" />
                </div>
            </Link>
            <Link href="/page3">
                <div className="text-white hover:text-gray-300">
                    <img src="/icon3.png" alt="Icon 3" className="w-6 h-6" />
                </div>
            </Link>
        </nav>
    );
};

export default BottomNavBar;
