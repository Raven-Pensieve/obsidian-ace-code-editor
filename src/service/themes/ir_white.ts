import * as ace from "ace-builds";

const cssText = `
.ace-ir-white .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-ir-white .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ir-white {
  background-color: #FFFFFF;
  color: #010101;
}

.ace-ir-white .ace_cursor {
  color: #A7A7A7;
}

.ace-ir-white .ace_marker-layer .ace_selection {
  background: #E0E0ED;
}

.ace-ir-white.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-ir-white .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ir-white .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-ir-white .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.051);
}

.ace-ir-white .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.051);
}

.ace-ir-white .ace_marker-layer .ace_selected-word {
  border: 1px solid #E0E0ED;
}

.ace-ir-white .ace_fold {
    background-color: #016692;
    border-color: #010101;
}
.ace-ir-white .ace_keyword{color:#016692;}
.ace-ir-white .ace_constant{color:#333366;}
.ace-ir-white .ace_constant.ace_numeric{color:#8C008A;}
.ace-ir-white .ace_support{color:#646409;}
.ace-ir-white .ace_support.ace_function{color:#7A7025;}
.ace-ir-white .ace_support.ace_constant{color:#582B00;}
.ace-ir-white .ace_storage{color:#877611;}
.ace-ir-white .ace_invalid.ace_illegal{color:#A00294;
background-color:rgba(223, 104, 217, 0.75);}
.ace-ir-white .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#A00294;}
.ace-ir-white .ace_string{color:#009F78;}
.ace-ir-white .ace_string.ace_regexp{color:#9D7416;}
.ace-ir-white .ace_comment{color:#898989;}
.ace-ir-white .ace_variable{color:#696989;}
.ace-ir-white .ace_meta.ace_tag{color:#0067C2;}
.ace-ir-white .ace_entity.ace_other.ace_attribute-name{color:#BC4D00;}
.ace-ir-white .ace_markup.ace_heading{color:#D95B06;
background-color:#632D04;}
.ace-ir-white .ace_markup.ace_list{color:#46391E;}
`;

ace.define("ace/theme/ir_white-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/ir_white", ["require", "exports", "module", "ace/theme/ir_white-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-ir-white";
	exports.cssText = require("./ir_white-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
