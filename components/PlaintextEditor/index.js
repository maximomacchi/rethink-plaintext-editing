import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

import css from '../../public/editor.css';

function PlaintextEditor({ file, write, apiKey }) {
  const [fileContent, setFileContent] = useState('');

  // Read in file contents when passed as prop
  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      console.log(e.target.result);
      setFileContent(e.target.result);
    });
    reader.readAsBinaryString(file);
  }, [file]);

  const saveFile = () => {
    write(
      new File([fileContent], file.name, {
        type: file.type,
        lastModified: new Date()
      })
    );
  };

  return (
    <div className={css.editor}>
      <Editor apiKey={apiKey} init={{ height: '50vh' }} value={fileContent} />
      <button className={css.saveBtn} onClick={saveFile}>
        Save
      </button>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  apiKey: PropTypes.string
};

export default PlaintextEditor;
