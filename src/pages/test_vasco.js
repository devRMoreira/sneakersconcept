import React from 'react';
import ShoeCard from '@/frontend/components/ShoeCard';
import Link from 'next/link';

const TestVasco = () => (
    <div className="grid grid-cols-2 gap-4 justify-center items-center h-screen bg-gray-100">
        <ShoeCard name="Nike Air Max" price={99.99} discounted={true} />
        <ShoeCard name="Adidas Superstar" price={79.99} discounted={false} />
        <ShoeCard name="Nike Air Max" price={99.99} discounted={true} />
        <ShoeCard name="Adidas Superstar" price={79.99} discounted={false} />
        <ShoeCard name="Nike Air Max" price={99.99} discounted={true} />
        <ShoeCard name="Adidas Superstar" price={79.99} discounted={false} />
        <ShoeCard name="Nike Air Max" price={99.99} discounted={true} />
        <ShoeCard name="Adidas Superstar" price={79.99} discounted={false} />
        {/* Add more ShoeCard components as needed */}
    </div>
);

export default TestVasco;
