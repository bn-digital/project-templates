import styled from "styled-components";

const EditorWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: 200px;

  border: 1px solid #e3e9f3;
  border-radius: 4px;

  overflow: auto;
  resize: vertical;

  .editor {
    font-family: monospaced;
    font-size: 1.2rem;
    min-height: 100%;

    textarea:focus {
      outline: none;
    }
  }
`;

export { EditorWrapper };
