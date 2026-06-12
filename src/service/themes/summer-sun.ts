import * as ace from "ace-builds";

const cssText = `
.ace-summer-sun .ace_gutter {
  background: #110F0A;
  color: rgb(130, 132, 107);
}

.ace-summer-sun .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-summer-sun {
  background-color: #110F0A;
  color: #F2F8CB;
}

.ace-summer-sun .ace_cursor {
  color: #F2F8CB;
}

.ace-summer-sun .ace_marker-layer .ace_selection {
  background: rgba(118, 112, 83, 0.50);
}

.ace-summer-sun.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #110F0A;
  border-radius: 2px;
}

.ace-summer-sun .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-summer-sun .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #7C7558;
}

.ace-summer-sun .ace_marker-layer .ace_active-line {
  background: #14120B;
}

.ace-summer-sun .ace_gutter-active-line {
  background-color: #14120B;
}

.ace-summer-sun .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(118, 112, 83, 0.50);
}

.ace-summer-sun .ace_fold {
    background-color: #7DDE12;
    border-color: #F2F8CB;
}
.ace-summer-sun .ace_keyword{color:#A3ED4E;}
.ace-summer-sun .ace_constant{color:#3A94DC;}
.ace-summer-sun .ace_constant.ace_language{color:#3588CA;}
.ace-summer-sun .ace_constant.ace_numeric{color:#3FA2ED;}
.ace-summer-sun .ace_constant.ace_character.ace_escape{color:#F3771D;}
.ace-summer-sun .ace_support.ace_function{color:#A3ED4E;}
.ace-summer-sun .ace_support.ace_constant.ace_property-value{color:#F35E18;}
.ace-summer-sun .ace_storage{color:#A3ED4E;}
.ace-summer-sun .ace_invalid{font-style:italic;
background-color:#F32119;}
.ace-summer-sun .ace_string{color:#F39B19;}
.ace-summer-sun .ace_comment{font-style:italic;
color:#645F47;}
.ace-summer-sun .ace_variable{color:#7DDE12;}
.ace-summer-sun .ace_variable.ace_language{color:#F35E18;}
.ace-summer-sun .ace_variable.ace_parameter{font-style:italic;}
.ace-summer-sun .ace_meta.ace_tag{color:#EEF890;}
.ace-summer-sun .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#F8BB00;}
.ace-summer-sun .ace_entity.ace_name.ace_function{color:#7DDE12;}
`;

ace.define("ace/theme/summer-sun-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/summer-sun", ["require", "exports", "module", "ace/theme/summer-sun-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-summer-sun";
	exports.cssText = require("./summer-sun-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
