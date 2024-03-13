import React from 'react';
import ShoeCard from '@/frontend/components/ShoeCard';
import Link from 'next/link';
import PlantCard from '@/frontend/components/PlantCard';

const TestVasco = () => (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <ShoeCard name="Nike Air Max" price={99.99} discounted={false} />
        {/* Example of discounted price */}
        <ShoeCard name="Adidas Superstar" price={79.99} discounted={true} />
    </div>
);

export default TestVasco;
