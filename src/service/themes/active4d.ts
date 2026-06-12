import * as ace from "ace-builds";

const cssText = `
.ace-active4d .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-active4d .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-active4d {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-active4d .ace_cursor {
  color: #000000;
}

.ace-active4d .ace_marker-layer .ace_selection {
  background: #BAD6FD;
}

.ace-active4d.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-active4d .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-active4d .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-active4d .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-active4d .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-active4d .ace_marker-layer .ace_selected-word {
  border: 1px solid #BAD6FD;
}

.ace-active4d .ace_fold {
    background-color: #21439C;
    border-color: #000000;
}
.ace-active4d .ace_keyword{font-weight:bold;
color:#006699;}
.ace-active4d .ace_constant.ace_language{color:#A535AE;}
.ace-active4d .ace_constant.ace_numeric{color:#A8017E;}
.ace-active4d .ace_support.ace_function{font-weight:bold;
color:#45AE34;}
.ace-active4d .ace_support.ace_constant{color:#B7734C;}
.ace-active4d .ace_support.ace_class{color:#A535AE;}
.ace-active4d .ace_support.ace_type{color:#A535AE;}
.ace-active4d .ace_storage{color:#FF5600;}
.ace-active4d .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-active4d .ace_string{color:#666666;}
.ace-active4d .ace_variable{font-weight:bold;
color:#0053FF;}
.ace-active4d .ace_meta.ace_tag{color:#7A7A7A;}
.ace-active4d .ace_entity.ace_other.ace_attribute-name{color:#963DFF;}
.ace-active4d .ace_entity.ace_name.ace_function{color:#21439C;}
.ace-active4d .ace_entity.ace_name.ace_tag{color:#016CFF;}
`;

ace.define("ace/theme/active4d-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/active4d", ["require", "exports", "module", "ace/theme/active4d-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-active4d";
	exports.cssText = require("./active4d-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
