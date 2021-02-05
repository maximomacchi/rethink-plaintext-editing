import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

import css from '../../public/editor.css';

function JSONEditor({ file, write, apiKey }) {
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
      <Editor apiKey={apiKey} init={{ height: '50vh' }} value={fileContent} />
      <button className={css.saveBtn} onClick={write}>
        Save
      </button>
    </div>
  );
}

JSONEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  apiKey: PropTypes.string
};

export default JSONEditor;
