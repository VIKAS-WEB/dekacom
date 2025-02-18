import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

import { FaRegClock , FaRegEye } from "react-icons/fa6";

const LatestPosts = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const entries = data.slice(0, 4)


  return (
    <div>

    {
        entries.map((post,key) => { 

        return <div className='item p-1 mx-2 my-4 flex flex-row items-center'  key={key}>

            <div className='img basis-1/2 p-1'>
                <img src='../../images/bann.png' alt='' />
            </div>

            <div className='ctn basis-1/2 p-1'>
                
                <h5 className='titre font-semibold text-sm '><Link className='text-zinc-800' href={`/blog/${post.id}`}>{post.title}</Link></h5>

                <div className='flex flex-row items-center justify-around'>
                    <span className='flex flex-row items-center text-gray-600 text-xs'><FaRegClock className='mr-2'/> 26/09/2023 </span>
                    <span className='flex flex-row items-center text-gray-600 text-xs mx-5'><FaRegEye className='mx-2'/> 0 </span>
                </div>

            </div>

        </div>

        })
    }
    
    </div>
    
  )
}

export default LatestPosts