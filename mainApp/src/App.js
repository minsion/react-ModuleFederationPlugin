import './App.css'
import React, { useRef, useState } from 'react';
import { RcEditor, RcTime } from 'remoteApp/components';
import { Button } from 'antd';

const App = () => {
  const editorRef = useRef(null)
  const [initContent, setInitContent] = useState({html: '', postTitle: ''})
  const handleSubmit = () => {
    console.log(666, editorRef.current)
	}
  return (
    <div style={{ width: 800, margin: '0 auto'}}>
      <div style={{ width: 600, margin: '0 auto' }}>
        <h1>main-app 页面</h1>
        <RcTime />
        <RcEditor ref={editorRef} content={initContent} />
        <Button className='submit-btn' type='primary' onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
};

export default App;
