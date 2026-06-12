import * as ace from "ace-builds";

const cssText = `
.ace-twilight-remix .ace_gutter {
  background: #030303;
  color: rgb(126, 126, 126);
}

.ace-twilight-remix .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-twilight-remix {
  background-color: #030303;
  color: #F8F8F8;
}

.ace-twilight-remix .ace_cursor {
  color: #A7A7A7;
}

.ace-twilight-remix .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20);
}

.ace-twilight-remix.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #030303;
  border-radius: 2px;
}

.ace-twilight-remix .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-twilight-remix .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-twilight-remix .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031);
}

.ace-twilight-remix .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031);
}

.ace-twilight-remix .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20);
}

.ace-twilight-remix .ace_fold {
    background-color: #EF8B2A;
    border-color: #F8F8F8;
}
.ace-twilight-remix .ace_keyword{color:#EF8B2A;}
.ace-twilight-remix .ace_constant{color:#44BCF9;}
.ace-twilight-remix .ace_support{color:#C9223F;}
.ace-twilight-remix .ace_support.ace_function{color:#DAD085;}
.ace-twilight-remix .ace_support.ace_constant{color:#EA5126;}
.ace-twilight-remix .ace_storage{color:#FF6600;}
.ace-twilight-remix .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(86, 45, 86, 0.75);}
.ace-twilight-remix .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#D2A8A1;}
.ace-twilight-remix .ace_string{color:#FEF593;}
.ace-twilight-remix .ace_string.ace_regexp{color:#E9C062;}
.ace-twilight-remix .ace_comment{font-style:italic;
color:#2B2B2B;}
.ace-twilight-remix .ace_variable{color:#EA5126;}
.ace-twilight-remix .ace_meta.ace_tag{color:#AC885B;}
.ace-twilight-remix .ace_markup.ace_heading{color:#CF6A4C;}
.ace-twilight-remix .ace_markup.ace_list{color:#F9EE98;}
`;

ace.define("ace/theme/twilight-remix-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/twilight-remix", ["require", "exports", "module", "ace/theme/twilight-remix-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-twilight-remix";
	exports.cssText = require("./twilight-remix-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
