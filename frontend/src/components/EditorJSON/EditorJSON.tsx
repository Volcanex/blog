/**
 * EditorJSON Component
 * 
 * @component
 * 
 * @author Gabriel
 * 
 * @prop {(json: any) => void} onJSONChange - The function to be called when the JSON content in the editor changes.
 * 
 * @example
 * // Example usage
 * <EditorJSON onJSONChange={(json) => console.log(json)} />
 * 
 * @overview The EditorJSON component is a JSON editor that validates JSON input and calls a provided function (`onJSONChange`) 
 * with the parsed JSON object every time the content changes. The editor uses Ace Editor with the Monokai theme for a sleek, 
 * code-friendly interface. JSON validation errors and success messages are displayed in an `EditorIndicator` component.
 * 
 * @see Editor - For parent component
 * 
 * @lastUpdated 2023-06-14
 * 
 *
 */

import React, { useState } from 'react';
import Ace from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import EditorIndicator from '../EditorIndicator/EditorIndicator';
import styles from './EditorJSON.module.scss';

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
      setMessage('JSON is valid.');
    } catch (error: any) { // use 'any' type for error
      setStatus('error'); // There was an error parsing the JSON
      setMessage('Invalid JSON: ' + error.message); // Provide more detail about the error
    }
  };

  return (
    <div className={styles.EditorJSON}>
      <Ace
        mode="json"
        theme="chrome"
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
