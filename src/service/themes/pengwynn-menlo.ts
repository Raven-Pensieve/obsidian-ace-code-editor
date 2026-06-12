import * as ace from "ace-builds";

const cssText = `
.ace-pengwynn-menlo .ace_gutter {
  background: #000000;
  color: rgb(115, 113, 110);
}

.ace-pengwynn-menlo .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-pengwynn-menlo {
  background-color: #000000;
  color: #E6E1DC;
}

.ace-pengwynn-menlo .ace_cursor {
  color: #FFFFFF;
}

.ace-pengwynn-menlo .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-pengwynn-menlo.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-pengwynn-menlo .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-pengwynn-menlo .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-pengwynn-menlo .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-pengwynn-menlo .ace_gutter-active-line {
  background-color: #333435;
}

.ace-pengwynn-menlo .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-pengwynn-menlo .ace_fold {
    background-color: #FFC66D;
    border-color: #E6E1DC;
}
.ace-pengwynn-menlo .ace_keyword{color:#FF7D00;}
.ace-pengwynn-menlo .ace_constant{color:#5B819E;}
.ace-pengwynn-menlo .ace_constant.ace_language{color:#6E9CBE;}
.ace-pengwynn-menlo .ace_constant.ace_numeric{color:#C28439;}
.ace-pengwynn-menlo .ace_constant.ace_character.ace_escape{color:#519F50;}
.ace-pengwynn-menlo .ace_support.ace_function{color:#6A8BDA;}
.ace-pengwynn-menlo .ace_support.ace_constant{color:#A5C261;}
.ace-pengwynn-menlo .ace_support.ace_type{color:#6E9CBE;}
.ace-pengwynn-menlo .ace_storage{color:#FF7D00;}
.ace-pengwynn-menlo .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-pengwynn-menlo .ace_string{color:#A5C261;}
.ace-pengwynn-menlo .ace_comment{font-style:italic;
color:#5B5B5B;}
.ace-pengwynn-menlo .ace_variable{color:#FFC66D;}
.ace-pengwynn-menlo .ace_variable.ace_language{color:#82AEFF;}
.ace-pengwynn-menlo .ace_meta.ace_tag{color:#E8BF6A;}
.ace-pengwynn-menlo .ace_entity.ace_other.ace_attribute-name{color:#E8BF6A;}
.ace-pengwynn-menlo .ace_entity.ace_name.ace_function{color:#FFC66D;}
.ace-pengwynn-menlo .ace_entity.ace_name{color:#FFFFFF;}
.ace-pengwynn-menlo .ace_entity.ace_name.ace_tag{color:#E8BF6A;}
`;

ace.define("ace/theme/pengwynn-menlo-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/pengwynn-menlo", ["require", "exports", "module", "ace/theme/pengwynn-menlo-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-pengwynn-menlo";
	exports.cssText = require("./pengwynn-menlo-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
