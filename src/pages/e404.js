import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function e404() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          ERROR 404
        </h1>

        <Image
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGkzaHY1dWhxZWRweHE0c2hxZ2ZyYTA4MTAyNGhuYWc5dzVrdGZ5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3eTLIJv3FXGqzFR6WY/giphy.gif"
          alt="Loading"
          width={400}
          height={400}
        />
        <Link href={`/home/`}>
          <div className="flex flex-row">
            <button>Go back</button>
          </div>
        </Link>
      </div>
    </>
  );
}
