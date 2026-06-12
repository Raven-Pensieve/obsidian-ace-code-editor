import * as ace from "ace-builds";

const cssText = `
.ace-barf .ace_gutter {
  background: rgba(21, 25, 30, 0.98);
  color: rgb(130, 134, 139);
}

.ace-barf .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-barf {
  background-color: rgba(21, 25, 30, 0.98);
  color: #EEF2F7;
}

.ace-barf .ace_cursor {
  color: #C4C4C4;
}

.ace-barf .ace_marker-layer .ace_selection {
  background: rgba(144, 178, 213, 0.34);
}

.ace-barf.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(21, 25, 30, 0.98);
  border-radius: 2px;
}

.ace-barf .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-barf .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-barf .ace_marker-layer .ace_active-line {
  background: rgba(87, 87, 87, 0.071);
}

.ace-barf .ace_gutter-active-line {
  background-color: rgba(87, 87, 87, 0.071);
}

.ace-barf .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(144, 178, 213, 0.34);
}

.ace-barf .ace_fold {
    background-color: #282E36;
    border-color: #EEF2F7;
}
.ace-barf .ace_keyword{font-weight:bold;
color:#697A8E;}
.ace-barf .ace_constant.ace_language{color:#53667D;}
.ace-barf .ace_constant.ace_numeric{color:#C1E1B8;}
.ace-barf .ace_constant.ace_character{color:#53667D;}
.ace-barf .ace_constant.ace_other{color:#53667D;}
.ace-barf .ace_support.ace_function{font-weight:bold;
color:#BACCE1;}
.ace-barf .ace_storage{font-weight:bold;
color:#A3D295;}
.ace-barf .ace_invalid{color:#FF0000;
background-color:rgba(255, 255, 255, 0.60);}
.ace-barf .ace_string{color:#5C81B3;}
.ace-barf .ace_comment{font-style:italic;
color:#6E6E6E;}
.ace-barf .ace_variable{background-color:#282E36;}
.ace-barf .ace_variable.ace_language{color:#708E67;}
.ace-barf .ace_entity.ace_other.ace_attribute-name{color:#708E67;}
.ace-barf .ace_entity.ace_name.ace_function{background-color:#282E36;}
.ace-barf .ace_entity.ace_name.ace_tag{color:#A3D295;}
`;

ace.define("ace/theme/barf-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/barf", ["require", "exports", "module", "ace/theme/barf-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-barf";
	exports.cssText = require("./barf-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
