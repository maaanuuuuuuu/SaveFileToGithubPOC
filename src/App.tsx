import React, { useState } from 'react'
import './App.css'
import {TextField} from "@material-ui/core";
import {useStateWithLocalStorage} from "./hooks";
import simpleGit, {SimpleGit} from 'simple-git';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {
    const [gitURL, setGitURL] = useStateWithLocalStorage("gitURL", "");
    // const git: SimpleGit = simpleGit();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = React.useRef(null);

    return (
        <div className="App">
            <TextField id="gitURL" label="Git URL" variant="outlined" /> <br />
            <TextField id="title" label="File" variant="outlined" />
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Write something!"
            />
        </div>
    )
}

export default App
