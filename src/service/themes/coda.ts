import * as ace from "ace-builds";

const cssText = `
.ace-coda .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-coda .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-coda {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-coda .ace_cursor {
  color: #000000;
}

.ace-coda .ace_marker-layer .ace_selection {
  background: #A7CAFF;
}

.ace-coda.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-coda .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-coda .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-coda .ace_marker-layer .ace_active-line {
  background: #EEF1F5;
}

.ace-coda .ace_gutter-active-line {
  background-color: #EEF1F5;
}

.ace-coda .ace_marker-layer .ace_selected-word {
  border: 1px solid #A7CAFF;
}

.ace-coda .ace_fold {
    background-color: #053369;
    border-color: #000000;
}
.ace-coda .ace_keyword{color:#000000;}
.ace-coda .ace_constant.ace_language{color:#000000;}
.ace-coda .ace_constant.ace_numeric{color:#0F20F6;}
.ace-coda .ace_constant.ace_character{color:#916319;}
.ace-coda .ace_constant.ace_other{color:#916319;}
.ace-coda .ace_support.ace_function{color:#7520AF;}
.ace-coda .ace_storage{color:#AA2063;}
.ace-coda .ace_invalid{color:#EB291C;}
.ace-coda .ace_string{color:#ED7722;}
.ace-coda .ace_comment{font-style:italic;
color:#3C802C;}
.ace-coda .ace_variable{color:#053369;}
.ace-coda .ace_variable.ace_language{color:#916319;}
.ace-coda .ace_variable.ace_parameter{color:#053369;}
.ace-coda .ace_entity.ace_other.ace_attribute-name{color:#881181;}
.ace-coda .ace_entity.ace_name.ace_function{color:#053369;}
.ace-coda .ace_entity.ace_name.ace_tag{color:#881181;}
`;

ace.define("ace/theme/coda-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/coda", ["require", "exports", "module", "ace/theme/coda-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-coda";
	exports.cssText = require("./coda-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
