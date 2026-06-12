import * as ace from "ace-builds";

const cssText = `
.ace-dominion-day .ace_gutter {
  background: #000000;
  color: rgb(93, 87, 108);
}

.ace-dominion-day .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-dominion-day {
  background-color: #000000;
  color: #B9ADD7;
}

.ace-dominion-day .ace_cursor {
  color: #A3FFA6;
}

.ace-dominion-day .ace_marker-layer .ace_selection {
  background: #3A5A3C;
}

.ace-dominion-day.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-dominion-day .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-dominion-day .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #461560;
}

.ace-dominion-day .ace_marker-layer .ace_active-line {
  background: #18041A;
}

.ace-dominion-day .ace_gutter-active-line {
  background-color: #18041A;
}

.ace-dominion-day .ace_marker-layer .ace_selected-word {
  border: 1px solid #3A5A3C;
}

.ace-dominion-day .ace_fold {
    background-color: #971BA1;
    border-color: #B9ADD7;
}
.ace-dominion-day .ace_keyword.ace_operator{color:#A5A4C5;}
.ace-dominion-day .ace_constant{color:#B36FD6;}
.ace-dominion-day .ace_support{color:#971BA1;}
.ace-dominion-day .ace_storage{color:#5B55FE;}
.ace-dominion-day .ace_invalid{color:#A3FFA6;
background-color:rgba(255, 0, 0, 0.18);}
.ace-dominion-day .ace_string{color:#83529D;}
.ace-dominion-day .ace_comment{color:#554D9D;}
.ace-dominion-day .ace_variable{color:#971BA1;}
.ace-dominion-day .ace_variable.ace_parameter{color:#5D935D;}
.ace-dominion-day .ace_entity.ace_other.ace_attribute-name{color:#65158F;}
.ace-dominion-day .ace_entity.ace_name.ace_function{color:#971BA1;}
.ace-dominion-day .ace_entity.ace_name.ace_tag{color:#471062;}
`;

ace.define("ace/theme/dominion-day-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/dominion-day", ["require", "exports", "module", "ace/theme/dominion-day-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-dominion-day";
	exports.cssText = require("./dominion-day-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
