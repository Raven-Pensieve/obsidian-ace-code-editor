import * as ace from "ace-builds";

const cssText = `
.ace-inkdeep .ace_gutter {
  background: #040A12;
  color: rgb(130, 133, 137);
}

.ace-inkdeep .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-inkdeep {
  background-color: #040A12;
  color: #FFFFFF;
}

.ace-inkdeep .ace_cursor {
  color: #E6E6E6;
}

.ace-inkdeep .ace_marker-layer .ace_selection {
  background: #A5C9FF;
}

.ace-inkdeep.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #040A12;
  border-radius: 2px;
}

.ace-inkdeep .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-inkdeep .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #10161D;
}

.ace-inkdeep .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-inkdeep .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-inkdeep .ace_marker-layer .ace_selected-word {
  border: 1px solid #A5C9FF;
}

.ace-inkdeep .ace_fold {
    background-color: #63983B;
    border-color: #FFFFFF;
}
.ace-inkdeep .ace_keyword{color:#3B5D8B;}
.ace-inkdeep .ace_constant.ace_language{color:#EF872A;}
.ace-inkdeep .ace_constant.ace_numeric{color:#B9D2EB;}
.ace-inkdeep .ace_support.ace_function{color:#FF3700;}
.ace-inkdeep .ace_support.ace_constant{color:#7AB7F9;}
.ace-inkdeep .ace_storage{color:#ED2E8B;}
.ace-inkdeep .ace_string{color:#3B5D8B;}
.ace-inkdeep .ace_comment{font-style:italic;
color:#510D15;}
.ace-inkdeep .ace_variable{color:#63983B;}
.ace-inkdeep .ace_variable.ace_language{color:#C5FF38;}
.ace-inkdeep .ace_variable.ace_parameter{font-style:italic;
color:#F4B52D;}
.ace-inkdeep .ace_entity.ace_other.ace_attribute-name{color:#D6CB6D;}
.ace-inkdeep .ace_entity.ace_name.ace_function{color:#63983B;}
.ace-inkdeep .ace_entity.ace_name.ace_tag{color:#766817;}
`;

ace.define("ace/theme/inkdeep-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/inkdeep", ["require", "exports", "module", "ace/theme/inkdeep-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-inkdeep";
	exports.cssText = require("./inkdeep-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
