import * as ace from "ace-builds";

const cssText = `
.ace-iplastic .ace_gutter {
  background: rgba(238, 238, 238, 0.92);
  color: rgb(119, 119, 119);
}

.ace-iplastic .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-iplastic {
  background-color: rgba(238, 238, 238, 0.92);
  color: #000000;
}

.ace-iplastic .ace_cursor {
  color: #000000;
}

.ace-iplastic .ace_marker-layer .ace_selection {
  background: #BAD6FD;
}

.ace-iplastic.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(238, 238, 238, 0.92);
  border-radius: 2px;
}

.ace-iplastic .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-iplastic .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(179, 179, 179, 0.96);
}

.ace-iplastic .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.10);
}

.ace-iplastic .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.10);
}

.ace-iplastic .ace_marker-layer .ace_selected-word {
  border: 1px solid #BAD6FD;
}

.ace-iplastic .ace_fold {
    background-color: #FF8000;
    border-color: #000000;
}
.ace-iplastic .ace_keyword{color:#0000FF;}
.ace-iplastic .ace_constant{color:#6782D3;}
.ace-iplastic .ace_constant.ace_language{color:#9700CC;}
.ace-iplastic .ace_constant.ace_numeric{color:#0066FF;}
.ace-iplastic .ace_support{font-weight:bold;
color:#3333FF;}
.ace-iplastic .ace_support.ace_constant{color:#6782D3;}
.ace-iplastic .ace_storage{font-weight:bold;}
.ace-iplastic .ace_invalid{color:#FF0000;
background-color:rgba(231, 26, 17, 0.30);}
.ace-iplastic .ace_string{color:#009933;}
.ace-iplastic .ace_string.ace_regexp{color:#FF0080;}
.ace-iplastic .ace_comment{font-style:italic;
color:#0066FF;}
.ace-iplastic .ace_variable{color:#FF8000;}
.ace-iplastic .ace_variable.ace_parameter{font-style:italic;}
.ace-iplastic .ace_meta.ace_tag{color:#0033CC;}
.ace-iplastic .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#3366CC;}
.ace-iplastic .ace_entity.ace_name.ace_function{color:#FF8000;}
.ace-iplastic .ace_entity.ace_name.ace_tag{font-weight:bold;}
`;

(ace as any).define("ace/theme/iplastic-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/iplastic", ["require", "exports", "module", "ace/theme/iplastic-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-iplastic";
	exports.cssText = require("./iplastic-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
