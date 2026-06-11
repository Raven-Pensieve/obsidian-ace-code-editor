import * as ace from "ace-builds";

const cssText = `
.ace-monoindustrial .ace_gutter {
  background: #222C28;
  color: rgb(145, 150, 148);
}

.ace-monoindustrial .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-monoindustrial {
  background-color: #222C28;
  color: #FFFFFF;
}

.ace-monoindustrial .ace_cursor {
  color: #FFFFFF;
}

.ace-monoindustrial .ace_marker-layer .ace_selection {
  background: rgba(145, 153, 148, 0.40);
}

.ace-monoindustrial.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #222C28;
  border-radius: 2px;
}

.ace-monoindustrial .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-monoindustrial .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(102, 108, 104, 0.50);
}

.ace-monoindustrial .ace_marker-layer .ace_active-line {
  background: rgba(12, 13, 12, 0.25);
}

.ace-monoindustrial .ace_gutter-active-line {
  background-color: rgba(12, 13, 12, 0.25);
}

.ace-monoindustrial .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(145, 153, 148, 0.40);
}

.ace-monoindustrial .ace_fold {
    background-color: #A8B3AB;
    border-color: #FFFFFF;
}
.ace-monoindustrial .ace_keyword{color:#A39E64;}
.ace-monoindustrial .ace_keyword.ace_operator{color:#A8B3AB;}
.ace-monoindustrial .ace_constant{color:#E98800;}
.ace-monoindustrial .ace_constant.ace_numeric{color:#E98800;}
.ace-monoindustrial .ace_support.ace_function{color:#588E60;}
.ace-monoindustrial .ace_support.ace_constant{color:#C87500;}
.ace-monoindustrial .ace_support.ace_class{color:#5778B6;}
.ace-monoindustrial .ace_support.ace_type{color:#5778B6;}
.ace-monoindustrial .ace_storage{color:#C23B00;}
.ace-monoindustrial .ace_invalid{color:#FFFFFF;
background-color:rgba(153, 0, 0, 0.68);}
.ace-monoindustrial .ace_comment{color:#666C68;
background-color:#151C19;}
.ace-monoindustrial .ace_variable{color:#A8B3AB;}
.ace-monoindustrial .ace_variable.ace_language{color:#648BD2;}
.ace-monoindustrial .ace_variable.ace_parameter{color:#648BD2;}
.ace-monoindustrial .ace_entity.ace_other.ace_attribute-name{color:#909993;}
.ace-monoindustrial .ace_entity.ace_name.ace_function{color:#A8B3AB;}
.ace-monoindustrial .ace_entity.ace_name{color:#5778B6;}
.ace-monoindustrial .ace_entity.ace_name.ace_tag{color:#A65EFF;}
`;

(ace as any).define("ace/theme/monoindustrial-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/monoindustrial", ["require", "exports", "module", "ace/theme/monoindustrial-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-monoindustrial";
	exports.cssText = require("./monoindustrial-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
