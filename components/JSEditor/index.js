import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';

import css from '../../public/editor.css';

function JSEditor({ file, write, apiKey }) {
  const [fileContent, setFileContent] = useState('');

  // Read in file contents when passed as prop
  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      setFileContent(e.target.result);
    });
    reader.readAsBinaryString(file);
  }, [file]);

  // Editor does not support syntax highlighting or code previews. With more
  // time given and assistance, this could be implemented. However, this is the
  // best I could implement working completely independently
  return (
    <div className={css.editor}>
      <Editor apiKey={apiKey} init={{ height: '50vh' }} value={fileContent} />
      <button className={css.saveBtn} onClick={write}>
        Save
      </button>
    </div>
  );
}

JSEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  apiKey: PropTypes.string
};

export default JSEditor;
