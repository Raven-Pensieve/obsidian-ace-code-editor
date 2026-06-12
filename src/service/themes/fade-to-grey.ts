import * as ace from "ace-builds";

const cssText = `
.ace-fade-to-grey .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-fade-to-grey .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-fade-to-grey {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-fade-to-grey .ace_cursor {
  color: #FFFFFF;
}

.ace-fade-to-grey .ace_marker-layer .ace_selection {
  background: rgba(74, 140, 219, 0.70);
}

.ace-fade-to-grey.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-fade-to-grey .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-fade-to-grey .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-fade-to-grey .ace_marker-layer .ace_active-line {
  background: rgba(58, 58, 0, 0.48);
}

.ace-fade-to-grey .ace_gutter-active-line {
  background-color: rgba(58, 58, 0, 0.48);
}

.ace-fade-to-grey .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(74, 140, 219, 0.70);
}

.ace-fade-to-grey .ace_fold {
    background-color: #AAAAAA;
    border-color: #FFFFFF;
}
.ace-fade-to-grey .ace_keyword{color:#D01D33;}
.ace-fade-to-grey .ace_constant{color:#96DAFF;}
.ace-fade-to-grey .ace_support.ace_function{color:#CBC3B1;}
.ace-fade-to-grey .ace_support.ace_class{font-weight:bold;
color:#FFC074;}
.ace-fade-to-grey .ace_storage{color:#3185B9;}
.ace-fade-to-grey .ace_string{color:#E3E658;}
.ace-fade-to-grey .ace_string.ace_regexp{color:#D8E600;}
.ace-fade-to-grey .ace_comment{color:#696854;}
.ace-fade-to-grey .ace_variable{font-weight:bold;
color:#898989;}
.ace-fade-to-grey .ace_variable.ace_parameter{color:#C3C3C3;}
.ace-fade-to-grey .ace_meta.ace_tag{color:#3E3E3E;}
.ace-fade-to-grey .ace_entity.ace_other.ace_attribute-name{color:#A1A1A1;}
.ace-fade-to-grey .ace_entity.ace_name.ace_function{color:#AAAAAA;}
`;

ace.define("ace/theme/fade-to-grey-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/fade-to-grey", ["require", "exports", "module", "ace/theme/fade-to-grey-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-fade-to-grey";
	exports.cssText = require("./fade-to-grey-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
