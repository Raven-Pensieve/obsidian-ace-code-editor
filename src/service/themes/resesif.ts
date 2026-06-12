import * as ace from "ace-builds";

const cssText = `
.ace-resesif .ace_gutter {
  background: #2B2B2B;
  color: rgb(137, 134, 132);
}

.ace-resesif .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-resesif {
  background-color: #2B2B2B;
  color: #E6E1DC;
}

.ace-resesif .ace_cursor {
  color: #FFFFFF;
}

.ace-resesif .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-resesif.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2B2B2B;
  border-radius: 2px;
}

.ace-resesif .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-resesif .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-resesif .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-resesif .ace_gutter-active-line {
  background-color: #333435;
}

.ace-resesif .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-resesif .ace_fold {
    background-color: #B6C34D;
    border-color: #E6E1DC;
}
.ace-resesif .ace_keyword{color:#B6C34D;}
.ace-resesif .ace_constant{color:#C29B7A;
background-color:rgba(186, 136, 102, 0.10);}
.ace-resesif .ace_constant.ace_language{color:#71BACC;}
.ace-resesif .ace_constant.ace_numeric{color:#B49CDA;
background-color:rgba(141, 118, 172, 0.10);}
.ace-resesif .ace_constant.ace_character.ace_escape{color:#3FC172;}
.ace-resesif .ace_support.ace_function{color:#D98339;}
.ace-resesif .ace_support.ace_constant{color:#BBC94D;}
.ace-resesif .ace_support.ace_type{color:#6E9CBE;}
.ace-resesif .ace_storage{color:#E8BF6A;}
.ace-resesif .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-resesif .ace_string{color:#B0CC66;
background-color:rgba(157, 187, 83, 0.059);}
.ace-resesif .ace_comment{color:#8B8B8B;}
.ace-resesif .ace_variable.ace_language{color:#DBD76B;}
.ace-resesif .ace_entity.ace_name{color:#E16C5B;
background-color:rgba(190, 73, 60, 0.10);}
`;

ace.define("ace/theme/resesif-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/resesif", ["require", "exports", "module", "ace/theme/resesif-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-resesif";
	exports.cssText = require("./resesif-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
