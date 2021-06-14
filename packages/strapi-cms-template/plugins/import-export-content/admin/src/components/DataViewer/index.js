import React from "react";
import PropTypes from "prop-types";
import { Code } from "./styles";

function DataViewer({ data, type }) {
  const __html = data;
  return (
    <Code>
      <div dangerouslySetInnerHTML={{ __html }} />
    </Code>
  );
}

DataViewer.defaultProps = {
  data: "",
  type: "",
};

DataViewer.propTypes = {
  data: PropTypes.string,
  type: PropTypes.string,
};

export default DataViewer;
