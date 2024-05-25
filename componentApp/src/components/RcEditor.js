import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'
import { Input } from 'antd';

const MyEditor = forwardRef(function MyEditor({preview, content},ref) {
	const [editor, setEditor] = useState(null)
	const [postTitle, setPostTitle] = useState('')
	const [html, setHtml] = useState('')
	const toolbarConfig = {
		showLinkImg: false,
		uploadImgShowBase64: true,
		toolbarKeys: [
			'fullScreen',
			'codeBlock',
			'bold',
			'italic',
			'underline',
			'color',
			'justifyLeft',
			'justifyCenter',
			'divider',
			'numberedList',
			'insertLink',
			'uploadImage',
			'insertImage'
			
		],
	}
	useEffect(() => {
		content && setPostTitle(content.postTitle)
		content && setHtml(content.html)
	}, [content])

	const editorConfig = {
		readOnly: preview,
		placeholder: 'Please enter content...',
	}

	
	const handleInputChange = (e) => {
		setPostTitle(e.target.value)
	}
	useImperativeHandle(ref, () => {
		return {html, postTitle}
	})
	useEffect(() => {
		return () => {
			if (editor == null) return
			editor.destroy()
			setEditor(null)
		}
	}, [editor])
	return (
			<>
				<Input value={postTitle} placeholder='Input post title' onChange={handleInputChange} />
				<div style={{ border: '1px solid #ccc', zIndex: 100, marginTop: '15px'}}>
					{!preview && 
						<Toolbar
							editor={editor}
							defaultConfig={toolbarConfig}
							mode="default"
							style={{ borderBottom: '1px solid #ccc' }}
						/>
					}
					<Editor
						defaultConfig={editorConfig}
						value={html}
						onCreated={setEditor}
						onChange={editor => setHtml(editor.getHtml())}
						mode="default"
						style={{ height: '300px' }}
					/>
				</div>
			</>
	)
})

export default MyEditor
