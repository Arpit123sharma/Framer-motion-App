import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"
function Card({
    Description,
    Filesize,
    Download,
    Tag,
    reference
}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden cursor-pointer'>
       <FaRegFileLines />
       <p className='text-sm font-semibold mt-5 leading-tight'>{Description}</p>
       <div className='w-full  absolute bottom-0 left-0'>
           <div className='footer flex justify-between items-center mb-5 px-8 py-3'>
            <h5>{Filesize}</h5>
            <span className='cursor-pointer w-7 h-7 bg-zinc-600 flex justify-center items-center rounded-full'>
                {Download ?<LuDownload size=".8em"/>:<MdOutlineClose /> }
            
            </span>
           </div>
           {Tag.close && (
           <div className={`tag w-full ${Tag.color} h-10 flex justify-center items-center`}>
             <h3 className='text-sm font-semibold'>{Tag.title}</h3>
           </div>
           )}
       </div>
    </motion.div>
  );
}

export default Card