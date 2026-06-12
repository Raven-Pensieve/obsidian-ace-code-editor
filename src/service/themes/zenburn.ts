import * as ace from "ace-builds";

const cssText = `
.ace-zenburn .ace_gutter {
  background: #393939;
  color: rgb(140, 140, 140);
}

.ace-zenburn .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-zenburn {
  background-color: #393939;
  color: #DEDEDE;
}

.ace-zenburn .ace_cursor {
  color: #D6D6D6;
}

.ace-zenburn .ace_marker-layer .ace_selection {
  background: rgba(131, 131, 131, 0.51);
}

.ace-zenburn.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #393939;
  border-radius: 2px;
}

.ace-zenburn .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-zenburn .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(165, 165, 165, 0.50);
}

.ace-zenburn .ace_marker-layer .ace_active-line {
  background: rgba(48, 48, 48, 0.32);
}

.ace-zenburn .ace_gutter-active-line {
  background-color: rgba(48, 48, 48, 0.32);
}

.ace-zenburn .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(131, 131, 131, 0.51);
}

.ace-zenburn .ace_fold {
    background-color: #FED6AF;
    border-color: #DEDEDE;
}
.ace-zenburn .ace_keyword{color:#FED6AF;}
.ace-zenburn .ace_keyword.ace_operator{color:#FEFED6;}
.ace-zenburn .ace_constant.ace_language{font-weight:bold;
color:#D6D6AE;}
.ace-zenburn .ace_constant.ace_numeric{color:#87D6D5;}
.ace-zenburn .ace_constant.ace_character{color:#CC9495;}
.ace-zenburn .ace_constant.ace_other{color:#CC9495;}
.ace-zenburn .ace_support.ace_function{color:#C7BA18;}
.ace-zenburn .ace_support.ace_constant{color:#CC9495;}
.ace-zenburn .ace_support.ace_type{color:#FFFB9D;}
.ace-zenburn .ace_storage.ace_type{color:#FFFB9D;}
.ace-zenburn .ace_invalid{text-decoration:underline;
font-style:italic;
font-weight:bold;
color:#FF5274;}
.ace-zenburn .ace_string{color:#D68686;}
.ace-zenburn .ace_string.ace_regexp{color:#C76F41;}
.ace-zenburn .ace_comment{color:#87AE86;}
.ace-zenburn .ace_variable.ace_parameter{font-weight:bold;
color:#FED6AF;}
.ace-zenburn .ace_entity.ace_name.ace_tag{color:#D6D7AF;}
`;

ace.define("ace/theme/zenburn-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/zenburn", ["require", "exports", "module", "ace/theme/zenburn-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-zenburn";
	exports.cssText = require("./zenburn-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
