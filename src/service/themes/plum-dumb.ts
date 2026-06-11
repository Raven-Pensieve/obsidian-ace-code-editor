import * as ace from "ace-builds";

const cssText = `
.ace-plum-dumb .ace_gutter {
  background: rgba(0, 0, 11, 0.97);
  color: rgb(128, 128, 133);
}

.ace-plum-dumb .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-plum-dumb {
  background-color: rgba(0, 0, 11, 0.97);
  color: #FFFFFF;
}

.ace-plum-dumb .ace_cursor {
  color: #CCCCCC;
}

.ace-plum-dumb .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.20);
}

.ace-plum-dumb.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 11, 0.97);
  border-radius: 2px;
}

.ace-plum-dumb .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-plum-dumb .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-plum-dumb .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.10);
}

.ace-plum-dumb .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.10);
}

.ace-plum-dumb .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.20);
}

.ace-plum-dumb .ace_fold {
    background-color: #CCCC66;
    border-color: #FFFFFF;
}
.ace-plum-dumb .ace_keyword{color:#CCCC66;}
.ace-plum-dumb .ace_keyword.ace_operator{color:#666666;}
.ace-plum-dumb .ace_constant{color:#FFCC00;
background-color:rgba(153, 0, 255, 0.20);}
.ace-plum-dumb .ace_constant.ace_language{background-color:rgba(153, 0, 255, 0.10);}
.ace-plum-dumb .ace_constant.ace_character{color:#FFCC00;}
.ace-plum-dumb .ace_constant.ace_other{color:#FFCC00;}
.ace-plum-dumb .ace_support.ace_function{color:#66FFCC;
background-color:rgba(102, 255, 255, 0.10);}
.ace-plum-dumb .ace_support.ace_constant{color:#33FFCC;}
.ace-plum-dumb .ace_support.ace_class{color:#999966;}
.ace-plum-dumb .ace_support.ace_type{color:#999966;}
.ace-plum-dumb .ace_storage{color:#FFFFCC;}
.ace-plum-dumb .ace_invalid{font-style:italic;
color:#FFFFFF;
background-color:rgba(255, 0, 0, 0.65);}
.ace-plum-dumb .ace_invalid.ace_deprecated{font-style:italic;
background-color:rgba(255, 0, 0, 0.55);}
.ace-plum-dumb .ace_string{color:#99FF66;
background-color:rgba(102, 0, 204, 0.35);}
.ace-plum-dumb .ace_comment{color:#666666;
background-color:rgba(51, 51, 51, 0.30);}
.ace-plum-dumb .ace_variable.ace_language{color:#00FFFF;
background-color:rgba(0, 204, 255, 0.15);}
.ace-plum-dumb .ace_entity.ace_other.ace_attribute-name{color:#FFFFCC;}
.ace-plum-dumb .ace_entity.ace_name.ace_tag{color:#FFFF99;
background-color:rgba(51, 51, 204, 0.0);}
`;

(ace as any).define("ace/theme/plum-dumb-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/plum-dumb", ["require", "exports", "module", "ace/theme/plum-dumb-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-plum-dumb";
	exports.cssText = require("./plum-dumb-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
