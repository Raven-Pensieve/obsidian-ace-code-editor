import * as ace from "ace-builds";

const cssText = `
.ace-forlatex .ace_gutter {
  background: rgba(0, 0, 0, 0.78);
  color: rgb(51, 102, 128);
}

.ace-forlatex .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-forlatex {
  background-color: rgba(0, 0, 0, 0.78);
  color: #66CCFF;
}

.ace-forlatex .ace_cursor {
  color: #FF8000;
}

.ace-forlatex .ace_marker-layer .ace_selection {
  background: #BAD6FD;
}

.ace-forlatex.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.78);
  border-radius: 2px;
}

.ace-forlatex .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-forlatex .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-forlatex .ace_marker-layer .ace_active-line {
  background: #7F7F7F;
}

.ace-forlatex .ace_gutter-active-line {
  background-color: #7F7F7F;
}

.ace-forlatex .ace_marker-layer .ace_selected-word {
  border: 1px solid #BAD6FD;
}

.ace-forlatex .ace_fold {
    background-color: #999999;
    border-color: #66CCFF;
}
.ace-forlatex .ace_keyword{color:#999999;}
.ace-forlatex .ace_constant.ace_character{color:#FFFF00;}
.ace-forlatex .ace_constant.ace_other{color:#FFFF00;}
.ace-forlatex .ace_support.ace_function{color:#FFCC66;}
.ace-forlatex .ace_support.ace_constant{color:#FF0000;}
.ace-forlatex .ace_support.ace_class{color:#FFFFFF;}
.ace-forlatex .ace_support.ace_type{color:#FFFFFF;}
.ace-forlatex .ace_string{color:#FF66FF;}
.ace-forlatex .ace_comment{font-style:italic;
color:#66FF66;}
.ace-forlatex .ace_variable.ace_parameter{color:#FF0080;}
`;

ace.define("ace/theme/forlatex-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/forlatex", ["require", "exports", "module", "ace/theme/forlatex-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-forlatex";
	exports.cssText = require("./forlatex-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
