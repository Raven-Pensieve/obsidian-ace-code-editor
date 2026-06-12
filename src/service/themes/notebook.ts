import * as ace from "ace-builds";

const cssText = `
.ace-notebook .ace_gutter {
  background: #BEB69D;
  color: rgb(95, 91, 79);
}

.ace-notebook .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-notebook {
  background-color: #BEB69D;
  color: rgba(0, 0, 0, 0.75);
}

.ace-notebook .ace_cursor {
  color: #000000;
}

.ace-notebook .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.86);
}

.ace-notebook.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #BEB69D;
  border-radius: 2px;
}

.ace-notebook .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-notebook .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(133, 113, 85, 0.25);
}

.ace-notebook .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.16);
}

.ace-notebook .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.16);
}

.ace-notebook .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.86);
}

.ace-notebook .ace_fold {
    background-color: underline;
    border-color: rgba(0, 0, 0, 0.75);
}
.ace-notebook .ace_keyword{color:#C52727;}
.ace-notebook .ace_constant.ace_language{color:rgba(255, 255, 255, 0.10);
background-color:rgba(101, 216, 230, 0.75);}
.ace-notebook .ace_constant.ace_numeric{color:rgba(0, 0, 0, 0.75);
background-color:rgba(154, 255, 66, 0.75);}
.ace-notebook .ace_constant.ace_character{color:rgba(255, 255, 255, 0.10);
background-color:rgba(101, 216, 230, 0.75);}
.ace-notebook .ace_constant.ace_character.ace_entity{color:rgba(255, 255, 255, 0.10);
background-color:rgba(143, 230, 211, 0.75);}
.ace-notebook .ace_constant.ace_other{color:rgba(255, 255, 255, 0.10);
background-color:rgba(101, 216, 230, 0.75);}
.ace-notebook .ace_support.ace_function{color:rgba(255, 255, 255, 0.10);
background-color:rgba(249, 85, 155, 0.43);}
.ace-notebook .ace_storage{color:rgba(255, 255, 255, 0.10);
background-color:rgba(166, 156, 134, 0.75);}
.ace-notebook .ace_invalid{color:#FFFFFF;
background-color:#BF363B;}
.ace-notebook .ace_string{color:rgba(255, 255, 255, 0.10);
background-color:rgba(233, 217, 43, 0.75);}
.ace-notebook .ace_comment{font-style:italic;
color:rgba(255, 238, 206, 0.50);}
.ace-notebook .ace_variable{text-decoration:underline;}
.ace-notebook .ace_variable.ace_language{color:rgba(255, 255, 255, 0.10);
background-color:rgba(102, 147, 82, 0.36);}
.ace-notebook .ace_entity.ace_other.ace_attribute-name{text-decoration:underline;}
.ace-notebook .ace_entity.ace_name.ace_function{text-decoration:underline;}
.ace-notebook .ace_entity.ace_name.ace_tag{color:rgba(0, 0, 0, 0.75);
background-color:rgba(177, 166, 143, 0.75);}
`;

ace.define("ace/theme/notebook-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/notebook", ["require", "exports", "module", "ace/theme/notebook-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-notebook";
	exports.cssText = require("./notebook-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
