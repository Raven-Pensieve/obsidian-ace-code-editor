import * as ace from "ace-builds";

const cssText = `
.ace-github .ace_gutter {
  background: #F8F8FF;
  color: rgb(124, 124, 128);
}

.ace-github .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-github {
  background-color: #F8F8FF;
  color: #000000;
}

.ace-github .ace_cursor {
  color: #000000;
}

.ace-github .ace_marker-layer .ace_selection {
  background: #BCD5FA;
}

.ace-github.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #F8F8FF;
  border-radius: 2px;
}

.ace-github .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-github .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-github .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-github .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-github .ace_marker-layer .ace_selected-word {
  border: 1px solid #BCD5FA;
}

.ace-github .ace_fold {
    background-color: bold;
    border-color: #000000;
}
.ace-github .ace_keyword{font-weight:bold;
color:#000000;}
.ace-github .ace_keyword.ace_other.ace_unit{color:#009999;}
.ace-github .ace_constant.ace_language{font-weight:bold;
color:#000000;}
.ace-github .ace_constant.ace_numeric{color:#009999;}
.ace-github .ace_support.ace_constant.ace_property-value{font-weight:bold;
color:#000000;}
.ace-github .ace_storage{font-weight:bold;
color:#000000;}
.ace-github .ace_string{color:#DD1144;}
.ace-github .ace_string.ace_regexp{color:#009926;}
.ace-github .ace_comment{font-style:italic;
color:#999988;}
.ace-github .ace_variable{font-weight:bold;
color:#990000;}
.ace-github .ace_variable.ace_language{color:#108888;}
.ace-github .ace_entity.ace_other.ace_attribute-name{color:#0A8585;}
.ace-github .ace_entity.ace_name.ace_function{font-weight:bold;
color:#990000;}
.ace-github .ace_entity.ace_name{font-weight:bold;
color:#445588;}
.ace-github .ace_entity.ace_name.ace_tag{color:#121289;}
`;

(ace as any).define("ace/theme/github-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/github", ["require", "exports", "module", "ace/theme/github-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-github";
	exports.cssText = require("./github-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
