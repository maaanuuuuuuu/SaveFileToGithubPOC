import React, { useState } from 'react'
import './App.css'
import {TextField} from '@material-ui/core';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {useApp} from "./useApp";

function App() {
    const {gitURL, setGitURL, selectedFile, setSelectedFile, isGitURLVerified} = useApp();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = React.useRef(null);

    const gitURLChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        setGitURL(event.target.value);
    }
    return (
        <div className="App">
            <TextField id="gitURL" label="Git URL" variant="outlined" onChange={gitURLChange} /> <br />
            <TextField id="fileName" label="File" variant="outlined" disabled={!isGitURLVerified} />
            <Editor
                readOnly={!isGitURLVerified}
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Write something!"
            />
        </div>
    )
}

export default App
