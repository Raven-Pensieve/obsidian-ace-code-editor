import * as ace from "ace-builds";

const cssText = `
.ace-railscasts-boost .ace_gutter {
  background: #000000;
  color: rgb(115, 113, 110);
}

.ace-railscasts-boost .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-railscasts-boost {
  background-color: #000000;
  color: #E6E1DC;
}

.ace-railscasts-boost .ace_cursor {
  color: #FFFFFF;
}

.ace-railscasts-boost .ace_marker-layer .ace_selection {
  background: rgba(0, 0, 255, 0.51);
}

.ace-railscasts-boost.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-railscasts-boost .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-railscasts-boost .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #232323;
}

.ace-railscasts-boost .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-railscasts-boost .ace_gutter-active-line {
  background-color: #333435;
}

.ace-railscasts-boost .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(0, 0, 255, 0.51);
}

.ace-railscasts-boost .ace_fold {
    background-color: #FFC66D;
    border-color: #E6E1DC;
}
.ace-railscasts-boost .ace_keyword{color:#CC7833;}
.ace-railscasts-boost .ace_constant{color:#6D9CBE;}
.ace-railscasts-boost .ace_constant.ace_language{color:#6E9CBE;}
.ace-railscasts-boost .ace_constant.ace_numeric{color:#A5C261;}
.ace-railscasts-boost .ace_constant.ace_character.ace_escape{color:#008808;}
.ace-railscasts-boost .ace_support.ace_function{color:#DA4939;}
.ace-railscasts-boost .ace_support.ace_constant{color:#A5C261;}
.ace-railscasts-boost .ace_support.ace_type{color:#6E9CBE;}
.ace-railscasts-boost .ace_storage{color:#CC7833;}
.ace-railscasts-boost .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-railscasts-boost .ace_string{color:#A5C261;}
.ace-railscasts-boost .ace_comment{font-style:italic;
color:#3B3C39;}
.ace-railscasts-boost .ace_variable{color:#FFC66D;}
.ace-railscasts-boost .ace_variable.ace_language{color:#D0D0FF;}
.ace-railscasts-boost .ace_meta.ace_tag{color:#E8BF6A;}
.ace-railscasts-boost .ace_entity.ace_other.ace_attribute-name{color:#E8BF6A;}
.ace-railscasts-boost .ace_entity.ace_name.ace_function{color:#FFC66D;}
.ace-railscasts-boost .ace_entity.ace_name{color:#FFFFFF;}
.ace-railscasts-boost .ace_entity.ace_name.ace_tag{color:#E8BF6A;}
`;

(ace as any).define("ace/theme/railscasts-boost-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/railscasts-boost", ["require", "exports", "module", "ace/theme/railscasts-boost-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-railscasts-boost";
	exports.cssText = require("./railscasts-boost-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
