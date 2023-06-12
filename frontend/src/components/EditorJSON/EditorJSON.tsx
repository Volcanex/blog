import React, { useState } from 'react';
import Ace from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import EditorIndicator from '../EditorIndicator/EditorIndicator';

interface EditorJSONProps {
  onJSONChange: (json: any) => void;
}

type StatusType = "idle" | "success" | "error";

const EditorJSON: React.FC<EditorJSONProps> = ({ onJSONChange }) => {
  const [json, setJson] = useState('{}');
  const [status, setStatus] = useState<StatusType>('idle'); // specify the type here
  const [message, setMessage] = useState('');

  const handleEditorChange = (newJson: string) => {
    setJson(newJson);
    try {
      const parsedJson = JSON.parse(newJson);
      onJSONChange(parsedJson);
      setStatus('success'); // JSON was parsed successfully
      setMessage('JSON is valid and has been successfully updated.');
    } catch (error: any) { // use 'any' type for error
      setStatus('error'); // There was an error parsing the JSON
      setMessage('Invalid JSON: ' + error.message); // Provide more detail about the error
    }
  };

  return (
    <div>
      <Ace
        mode="json"
        theme="monokai"
        value={json}
        onChange={handleEditorChange}
        name="JSON_EDITOR"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <EditorIndicator status={status} message={message} /> {/* Render your EditorIndicator here */}
    </div>
  );
};

export default EditorJSON;
