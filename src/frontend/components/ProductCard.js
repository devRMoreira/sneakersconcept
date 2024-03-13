import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
    return (
        <Link
            className="transform overflow-hidden bg-white hover:scale-105 cursor-pointer duration-200"
            href={`/home}`}
        >
            <Image
                width={500}
                height={500}
                alt="name"
                src={"https://i.imgur.com/gS9DHPu.jpeg"}
            />
            <section className="p-4 text-black/[.9]">
                <h2 className="text-lg font-medium">Nome da Sapatilha</h2>
                <div className="flex items-center text-black/[.5]">
                    <p className="mr-2 text-lg font-semibold">
                        50
                    </p>
                    <>
                        <p className="text-base font-medium line-through">
                            57€
                        </p>

                    </>
                </div>
            </section>
        </Link>
    );
};

export default ProductCard;
