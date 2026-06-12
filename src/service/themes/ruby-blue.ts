import * as ace from "ace-builds";

const cssText = `
.ace-ruby-blue .ace_gutter {
  background: #121E31;
  color: rgb(137, 143, 152);
}

.ace-ruby-blue .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ruby-blue {
  background-color: #121E31;
  color: #FFFFFF;
}

.ace-ruby-blue .ace_cursor {
  color: #FFFFFF;
}

.ace-ruby-blue .ace_marker-layer .ace_selection {
  background: #38566F;
}

.ace-ruby-blue.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #121E31;
  border-radius: 2px;
}

.ace-ruby-blue .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ruby-blue .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-ruby-blue .ace_marker-layer .ace_active-line {
  background: #253E5A;
}

.ace-ruby-blue .ace_gutter-active-line {
  background-color: #253E5A;
}

.ace-ruby-blue .ace_marker-layer .ace_selected-word {
  border: 1px solid #38566F;
}

.ace-ruby-blue .ace_fold {
    background-color: #F8BB00;
    border-color: #FFFFFF;
}
.ace-ruby-blue .ace_keyword{color:#F8BB00;}
.ace-ruby-blue .ace_keyword.ace_operator{color:#8AA6C1;}
.ace-ruby-blue .ace_constant{color:#8AA6C1;}
.ace-ruby-blue .ace_constant.ace_numeric{color:#EDDD3D;}
.ace-ruby-blue .ace_constant.ace_other{color:#B53B3C;}
.ace-ruby-blue .ace_support.ace_function{color:#B43D3D;}
.ace-ruby-blue .ace_string{color:#1DC116;}
.ace-ruby-blue .ace_string.ace_regexp{color:#CA4344;}
.ace-ruby-blue .ace_comment{font-style:italic;
color:#428BDD;}
.ace-ruby-blue .ace_variable.ace_parameter{font-style:italic;
color:#8AA6C1;}
`;

ace.define("ace/theme/ruby-blue-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/ruby-blue", ["require", "exports", "module", "ace/theme/ruby-blue-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-ruby-blue";
	exports.cssText = require("./ruby-blue-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
