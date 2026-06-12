import * as ace from "ace-builds";

const cssText = `
.ace-funky-dashboard .ace_gutter {
  background: rgba(0, 0, 0, 0.85);
  color: rgb(102, 102, 102);
}

.ace-funky-dashboard .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-funky-dashboard {
  background-color: rgba(0, 0, 0, 0.85);
  color: #CCCCCC;
}

.ace-funky-dashboard .ace_cursor {
  color: #CC66FF;
}

.ace-funky-dashboard .ace_marker-layer .ace_selection {
  background: rgba(51, 51, 51, 0.75);
}

.ace-funky-dashboard.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.85);
  border-radius: 2px;
}

.ace-funky-dashboard .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-funky-dashboard .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(179, 179, 179, 0.96);
}

.ace-funky-dashboard .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.10);
}

.ace-funky-dashboard .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.10);
}

.ace-funky-dashboard .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(51, 51, 51, 0.75);
}

.ace-funky-dashboard .ace_fold {
    background-color: #FFCC66;
    border-color: #CCCCCC;
}
.ace-funky-dashboard .ace_keyword{color:#6666FF;}
.ace-funky-dashboard .ace_constant{color:#6782D3;}
.ace-funky-dashboard .ace_constant.ace_language{color:#FF66FF;}
.ace-funky-dashboard .ace_constant.ace_numeric{color:#FF6666;}
.ace-funky-dashboard .ace_support{font-weight:bold;
color:#6666FF;}
.ace-funky-dashboard .ace_support.ace_constant{color:#6782D3;}
.ace-funky-dashboard .ace_storage{font-weight:bold;
color:#CCCCCC;}
.ace-funky-dashboard .ace_invalid{color:#FF0080;
background-color:rgba(231, 26, 17, 0.30);}
.ace-funky-dashboard .ace_string{color:#66FF66;}
.ace-funky-dashboard .ace_string.ace_regexp{color:#66FFFF;}
.ace-funky-dashboard .ace_comment{font-style:italic;
color:#666666;}
.ace-funky-dashboard .ace_variable{color:#FFCC66;}
.ace-funky-dashboard .ace_variable.ace_parameter{font-style:italic;
color:#CCCCCC;}
.ace-funky-dashboard .ace_meta.ace_tag{color:#6666FF;}
.ace-funky-dashboard .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#3366CC;}
.ace-funky-dashboard .ace_entity.ace_name.ace_function{color:#FFCC66;}
.ace-funky-dashboard .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#CCCCCC;}
`;

ace.define("ace/theme/funky_dashboard-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/funky_dashboard", ["require", "exports", "module", "ace/theme/funky_dashboard-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-funky-dashboard";
	exports.cssText = require("./funky_dashboard-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
