import React, { Fragment, useState,useEffect } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  useEffect(() =>{
  const formData = new URLSearchParams();
  formData.append("image_url",'http://localhost:3000/O1CN01ubFf422JInHhvp1r4_!!0-item_pic.jpg_430x430q90.jpg');
  formData.append("page_num", "1");
  formData.append("page_size", "10");
  formData.append("sort", "2");
  fetch('https://taobao-tmall-data-service.p.rapidapi.com/Item/MobileWsearchPicture.ashx', {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-key": "1e42f1039emsh7c0f4db85c95b0bp1307a1jsn918337a4377e",
    "x-rapidapi-host": "taobao-tmall-data-service.p.rapidapi.com"
  },
  body: formData,
})
.then(response => response) 
.then(json => console.log(json))
.catch(err => console.log(err));
  },[uploadedFile])
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage('File uploaded');
    } catch(err) {
      if(err.response.status === 500) {
        setMessage('There was a problem witht he server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  }

  return (
    <Fragment>
      { message ? <Message msg={ message } /> : null }
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={ uploadPercentage } />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      { uploadedFile ? <div className="row mt-5">
        <div className="col-md-6 m-auto"></div>
          <h3 classNAme="text-center">{ uploadedFile.fileName }</h3>
          <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
        </div> : null }
    </Fragment>
  );
};

export default FileUpload;
