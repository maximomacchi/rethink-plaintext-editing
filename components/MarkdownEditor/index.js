import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

import css from '../../public/editor.css';

function MarkdownEditor({ file, write, apiKey }) {
  const [fileContent, setFileContent] = useState('');

  // Read in file contents when passed as prop
  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      setFileContent(e.target.result);
    });
    reader.readAsBinaryString(file);
  }, [file]);

  return (
    <div className={css.editor}>
      <Editor
        apiKey={apiKey}
        init={{
          height: '50vh',
          // Patterns used for Markdown
          textpattern_patterns: [
            { start: '*', end: '*', format: 'italic' },
            { start: '**', end: '**', format: 'bold' },
            { start: '#', format: 'h1' },
            { start: '##', format: 'h2' },
            { start: '###', format: 'h3' },
            { start: '####', format: 'h4' },
            { start: '#####', format: 'h5' },
            { start: '######', format: 'h6' },
            { start: '1. ', cmd: 'InsertOrderedList' },
            { start: '* ', cmd: 'InsertUnorderedList' },
            { start: '- ', cmd: 'InsertUnorderedList' }
          ]
        }}
        plugins="textpattern"
        value={fileContent}
      />
      <button className={css.saveBtn} onClick={write}>
        Save
      </button>
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  apiKey: PropTypes.string
};

export default MarkdownEditor;
