// in EditorJSON.tsx

import React, { useState } from 'react';
import Ace from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

interface EditorJSONProps {
  onJSONChange: (json: any) => void; 
}

const EditorJSON: React.FC<EditorJSONProps> = ({ onJSONChange }) => {
  const [json, setJson] = useState('{}');

  const handleEditorChange = (newJson: string) => {
    setJson(newJson);
    try {
      const parsedJson = JSON.parse(newJson);
      onJSONChange(parsedJson);
    } catch (error) {
      // Invalid JSON, we might want to handle this case
    }
  };

  return (
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
  );
};

export default EditorJSON;
