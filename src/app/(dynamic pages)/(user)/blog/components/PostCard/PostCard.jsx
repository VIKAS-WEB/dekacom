import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

import { FaRegClock , FaCircleArrowRight } from "react-icons/fa6";

const PostCard = (props) => {

    const {id,title,body} = props.posts

  return (
    
    <div className='item px-2 py-4 mx-2  border border-t-gray-600 border-b-gray-600 border-x-0 my-5 relative' >
        <span className='absolute w-8 border-4 border-black -top-1 left-0' />

        <div className='img'>
            <img src='../../images/bann.png' alt='' />
        </div>

        <div className='ctn'>
            <span className='flex flex-row items-center text-gray-600 text-xs'><FaRegClock className='mr-2'/>26/09/2023</span>
            <h4 className='titre h-10 mb-4 font-semibold '>{title}</h4>
            <span className='body text-sm'>{body.substring(0,50)}</span>

        </div>

        <div className='btn mt-5'>
            <Link href={`/${props.routepage}/${id}`}>
            <button className='bg-zinc-800 text-white px-5 py-1 uppercase flex items-center'>{"Lire L'article"}<FaCircleArrowRight className='ml-2'/></button>
            </Link>
        </div>

    </div>
    
  )
}

export default PostCard