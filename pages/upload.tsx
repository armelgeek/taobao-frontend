import Head from 'next/head'
import React, { useState,useEffect } from 'react'
        function getObjectURL(file) {
            var url = null;
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
export default function Upload() {
  const [file, setFile] = useState([])
  const [data, setData] = useState([])

  const handleChange = (event)=>{
     var image = event.target.files[0];
     console.log(getObjectURL(image))
   
  }
 
  return (
    <div  className="mt-6">
      <Head>
        <title> Upload</title>
      </Head>
      <div>
        <input type="file" onChange={handleChange}/>
        <img src={file}/>
        {file}
      </div>
    </div>

  )
}
