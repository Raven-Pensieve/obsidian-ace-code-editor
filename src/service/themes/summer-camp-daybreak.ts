import * as ace from "ace-builds";

const cssText = `
.ace-summer-camp-daybreak .ace_gutter {
  background: #110F0A;
  color: rgb(130, 132, 107);
}

.ace-summer-camp-daybreak .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-summer-camp-daybreak {
  background-color: #110F0A;
  color: #F2F8CB;
}

.ace-summer-camp-daybreak .ace_cursor {
  color: #F2F8CB;
}

.ace-summer-camp-daybreak .ace_marker-layer .ace_selection {
  background: rgba(50, 45, 26, 0.75);
}

.ace-summer-camp-daybreak.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #110F0A;
  border-radius: 2px;
}

.ace-summer-camp-daybreak .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-summer-camp-daybreak .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #F3771D;
}

.ace-summer-camp-daybreak .ace_marker-layer .ace_active-line {
  background: rgba(38, 34, 20, 0.80);
}

.ace-summer-camp-daybreak .ace_gutter-active-line {
  background-color: rgba(38, 34, 20, 0.80);
}

.ace-summer-camp-daybreak .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(50, 45, 26, 0.75);
}

.ace-summer-camp-daybreak .ace_fold {
    background-color: #7DDE12;
    border-color: #F2F8CB;
}
.ace-summer-camp-daybreak .ace_keyword{color:#A3ED4E;}
.ace-summer-camp-daybreak .ace_constant{color:#3A94DC;}
.ace-summer-camp-daybreak .ace_constant.ace_language{color:#3588CA;}
.ace-summer-camp-daybreak .ace_constant.ace_numeric{color:#3FA2ED;}
.ace-summer-camp-daybreak .ace_constant.ace_character.ace_escape{color:#F3771D;}
.ace-summer-camp-daybreak .ace_storage{color:#A3ED4E;}
.ace-summer-camp-daybreak .ace_invalid{font-style:italic;
background-color:#F32119;}
.ace-summer-camp-daybreak .ace_string{color:#F39B19;}
.ace-summer-camp-daybreak .ace_comment{font-style:italic;
color:#5B522D;}
.ace-summer-camp-daybreak .ace_variable{color:#7DDE12;}
.ace-summer-camp-daybreak .ace_variable.ace_language{color:#F35E18;}
.ace-summer-camp-daybreak .ace_entity.ace_name.ace_function{color:#7DDE12;}
`;

ace.define("ace/theme/summer-camp-daybreak-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/summer-camp-daybreak", ["require", "exports", "module", "ace/theme/summer-camp-daybreak-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-summer-camp-daybreak";
	exports.cssText = require("./summer-camp-daybreak-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
