import queryString from "query-string";
import getContext from "get-canvas-context";

export default {
  name: "prtt",
  parameters: new Map(
    Object.entries(queryString.parse(window.location.search))
  ),
  webgl: getContext("webgl").getSupportedExtensions(),
  paths: {
    static: "static"
  }
};
