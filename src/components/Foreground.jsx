import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    //const[data,setData]=useState([])
    const Data = [
        {
        description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        fileSize:".9mb",
        download:true,
        tag:{
            close:true,
            title:"Download Now",
            color:"bg-green-500"
        }
    },
    {
        description:"hi, i am arpit i am from dabra.",
        fileSize:".7mb",
        download:false,
        tag:{
            close:true,
            title:"Download Now",
            color:"bg-red-500"
        }
    },
    {
        description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
        fileSize:".9mb",
        download:true,
        tag:{
            close:true,
            title:"Download Now",
            color:"bg-blue-500"
        }
    }
]
    //setData((prev)=>[...prev,...Data])
    const ref = useRef(null)
  return (
    <div className='w-full h-full top-0 left-0 fixed  z-[3] p-10 flex gap-10 flex-wrap' ref={ref}>
     {Data.map((value,index)=>(
        <Card Description={value.description} Filesize={value.fileSize} Download={value.download} Tag={value.tag} key={index} reference={ref}/>
     ))}
    </div>
  )
}

export default Foreground