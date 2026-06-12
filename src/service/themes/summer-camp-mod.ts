import * as ace from "ace-builds";

const cssText = `
.ace-summer-camp-mod .ace_gutter {
  background: #110F0A;
  color: rgb(130, 132, 107);
}

.ace-summer-camp-mod .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-summer-camp-mod {
  background-color: #110F0A;
  color: #F2F8CB;
}

.ace-summer-camp-mod .ace_cursor {
  color: #F2F8CB;
}

.ace-summer-camp-mod .ace_marker-layer .ace_selection {
  background: rgba(67, 61, 39, 0.50);
}

.ace-summer-camp-mod.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #110F0A;
  border-radius: 2px;
}

.ace-summer-camp-mod .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-summer-camp-mod .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #F3771D;
}

.ace-summer-camp-mod .ace_marker-layer .ace_active-line {
  background: #14120B;
}

.ace-summer-camp-mod .ace_gutter-active-line {
  background-color: #14120B;
}

.ace-summer-camp-mod .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(67, 61, 39, 0.50);
}

.ace-summer-camp-mod .ace_fold {
    background-color: #7DDE12;
    border-color: #F2F8CB;
}
.ace-summer-camp-mod .ace_keyword{color:#A3ED4E;}
.ace-summer-camp-mod .ace_constant{color:#3A94DC;}
.ace-summer-camp-mod .ace_constant.ace_language{color:#3588CA;}
.ace-summer-camp-mod .ace_constant.ace_numeric{color:#3FA2ED;}
.ace-summer-camp-mod .ace_constant.ace_character.ace_escape{color:#F3771D;}
.ace-summer-camp-mod .ace_storage{color:#A3ED4E;}
.ace-summer-camp-mod .ace_invalid{font-style:italic;
background-color:#F32119;}
.ace-summer-camp-mod .ace_string{color:#F39B19;}
.ace-summer-camp-mod .ace_comment{font-style:italic;
color:#2B2719;
background-color:#070604;}
.ace-summer-camp-mod .ace_variable{color:#7DDE12;}
.ace-summer-camp-mod .ace_variable.ace_language{color:#F35E18;}
.ace-summer-camp-mod .ace_entity.ace_name.ace_function{color:#7DDE12;}
`;

ace.define("ace/theme/summer-camp-mod-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/summer-camp-mod", ["require", "exports", "module", "ace/theme/summer-camp-mod-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-summer-camp-mod";
	exports.cssText = require("./summer-camp-mod-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
