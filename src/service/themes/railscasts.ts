import * as ace from "ace-builds";

const cssText = `
.ace-railscasts .ace_gutter {
  background: #2B2B2B;
  color: rgb(137, 134, 132);
}

.ace-railscasts .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-railscasts {
  background-color: #2B2B2B;
  color: #E6E1DC;
}

.ace-railscasts .ace_cursor {
  color: #FFFFFF;
}

.ace-railscasts .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-railscasts.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2B2B2B;
  border-radius: 2px;
}

.ace-railscasts .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-railscasts .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-railscasts .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-railscasts .ace_gutter-active-line {
  background-color: #333435;
}

.ace-railscasts .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-railscasts .ace_fold {
    background-color: #FFC66D;
    border-color: #E6E1DC;
}
.ace-railscasts .ace_keyword{color:#CC7833;}
.ace-railscasts .ace_constant{color:#6D9CBE;}
.ace-railscasts .ace_constant.ace_language{color:#6E9CBE;}
.ace-railscasts .ace_constant.ace_numeric{color:#A5C261;}
.ace-railscasts .ace_constant.ace_character.ace_escape{color:#519F50;}
.ace-railscasts .ace_support.ace_function{color:#DA4939;}
.ace-railscasts .ace_support.ace_constant{color:#A5C261;}
.ace-railscasts .ace_support.ace_type{color:#6E9CBE;}
.ace-railscasts .ace_storage{color:#CC7833;}
.ace-railscasts .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-railscasts .ace_string{color:#A5C261;}
.ace-railscasts .ace_comment{font-style:italic;
color:#BC9458;}
.ace-railscasts .ace_variable{color:#FFC66D;}
.ace-railscasts .ace_variable.ace_language{color:#D0D0FF;}
.ace-railscasts .ace_meta.ace_tag{color:#E8BF6A;}
.ace-railscasts .ace_entity.ace_other.ace_attribute-name{color:#E8BF6A;}
.ace-railscasts .ace_entity.ace_name.ace_function{color:#FFC66D;}
.ace-railscasts .ace_entity.ace_name{color:#FFFFFF;}
.ace-railscasts .ace_entity.ace_name.ace_tag{color:#E8BF6A;}
`;

(ace as any).define("ace/theme/railscasts-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/railscasts", ["require", "exports", "module", "ace/theme/railscasts-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-railscasts";
	exports.cssText = require("./railscasts-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
