import * as ace from "ace-builds";

const cssText = `
.ace-swyphs-ii .ace_gutter {
  background: rgba(0, 0, 0, 0.98);
  color: rgb(97, 97, 97);
}

.ace-swyphs-ii .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-swyphs-ii {
  background-color: rgba(0, 0, 0, 0.98);
  color: #C1C1C1;
}

.ace-swyphs-ii .ace_cursor {
  color: #FFFFFF;
}

.ace-swyphs-ii .ace_marker-layer .ace_selection {
  background: #BC1800;
}

.ace-swyphs-ii.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.98);
  border-radius: 2px;
}

.ace-swyphs-ii .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-swyphs-ii .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #323232;
}

.ace-swyphs-ii .ace_marker-layer .ace_active-line {
  background: #080808;
}

.ace-swyphs-ii .ace_gutter-active-line {
  background-color: #080808;
}

.ace-swyphs-ii .ace_marker-layer .ace_selected-word {
  border: 1px solid #BC1800;
}

.ace-swyphs-ii .ace_fold {
    background-color: #6b72e6;
    border-color: #C1C1C1;
}
.ace-swyphs-ii .ace_keyword.ace_operator{color:#608C6D;}
.ace-swyphs-ii .ace_constant.ace_language{color:#557474;}
.ace-swyphs-ii .ace_constant.ace_numeric{color:#D7D7D7;}
.ace-swyphs-ii .ace_support.ace_function{color:#7D6068;}
.ace-swyphs-ii .ace_support.ace_class{color:#867E63;}
.ace-swyphs-ii .ace_support.ace_type{color:#8D7D68;}
.ace-swyphs-ii .ace_storage.ace_type{color:#8D7D68;}
.ace-swyphs-ii .ace_comment{font-style:italic;
color:#575757;}
.ace-swyphs-ii .ace_entity.ace_other.ace_attribute-name{color:#8B8B8B;}
`;

ace.define("ace/theme/swyphs-ii-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/swyphs-ii", ["require", "exports", "module", "ace/theme/swyphs-ii-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-swyphs-ii";
	exports.cssText = require("./swyphs-ii-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
