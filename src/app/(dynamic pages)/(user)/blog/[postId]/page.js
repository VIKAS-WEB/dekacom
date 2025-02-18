import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarDays, FaRegEye, FaAngleRight } from "react-icons/fa6";

const SinglePost = async (props) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.postId}`
  );
  const data = await res.json();
  return (
    <div>
      <div className="text-center">
        <div className="ancre" id="titre"></div>
        <div className="w-4/5 mx-auto">
          <Image src="/../../images/bann.png" alt="" fill={true} />
        </div>

        <button className=" bg-[#000000] text-white px-5 py-1 rounded">
          Catègorie
        </button>
        <h1 className="uppercase font-semibold text-2xl">{data.title}</h1>
      </div>

      <div className="flex flex-row justify-center items-center">
        <span className="flex flex-row items-center text-gray-600 text-xs mx-5">
          <FaCalendarDays className="mx-2" /> 26/09/2023
        </span>
        <span className="flex flex-row items-center text-gray-600 text-xs mx-5">
          <FaRegEye className="mx-2" /> 0
        </span>
      </div>

      <div className="mt-10">{data.body}</div>

      <div className="mt-10 flex flex-row justify-end">
        <Link
          className="text-[#000000] flex flex-row items-center"
          href={`/blog/${Number(props.params.postId) + 1}#titre`}
        >
          Article suivant
          <FaAngleRight className="mx-1" />
        </Link>
      </div>
      <hr className="border border-gray-400 my-10" />
    </div>
  );
};

export default SinglePost;
