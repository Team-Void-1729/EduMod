import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../css/RichTextEditor.css'; // Import your CSS file for additional styling
import { useReactToPrint } from 'react-to-print';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const onBlockTypeClick = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const customKeyBindingFn = (e) => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.key === 'b') {
      return 'bold-shortcut';
    }
    return getDefaultKeyBinding(e);
  };

  const handleKeyBinding = (command) => {
    if (command === 'bold-shortcut') {
      onStyleClick('BOLD');
      return 'handled';
    }
    return 'not-handled';
  };

  const contentRef = React.createRef();

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <div className="rich-text-editor">
      <div className="toolbar">
      <button onClick={() => onStyleClick('BOLD')}>Bold</button>
        <button onClick={() => onStyleClick('ITALIC')}>Italic</button>
        <button onClick={() => onStyleClick('UNDERLINE')}>Underline</button>
        <button onClick={() => onBlockTypeClick('unordered-list-item')}>
          Bullet List
        </button>
        <select
          onChange={(e) => onBlockTypeClick(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Heading
          </option>
          <option value="header-one">Heading 1</option>
          <option value="header-two">Heading 2</option>
          <option value="header-three">Heading 3</option>
          <option value="header-four">Heading 4</option>
        </select>
        <select
          onChange={(e) =>
            onStyleClick(`FONT_FAMILY_${e.target.value.toUpperCase()}`)
          }
          defaultValue=""
        >
          <option value="" disabled>
            Font Family
          </option>
          <option value="arial">Arial</option>
          <option value="times new roman">Times New Roman</option>
          <option value="courier new">Courier New</option>
        </select>
        <select
          onChange={(e) => onStyleClick(`FONT_SIZE_${e.target.value}`)}
          defaultValue=""
        >
          <option value="" disabled>
            Font Size
          </option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
        <button onClick={handlePrint}>
          <DownloadForOfflineIcon />
          Download as PDF
        </button>
      </div>
      <div className="editor" ref={contentRef}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={customKeyBindingFn}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
