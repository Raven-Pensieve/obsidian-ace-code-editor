import * as ace from "ace-builds";

const cssText = `
.ace-tango-in-twilight .ace_gutter {
  background: rgba(0, 0, 0, 0.95);
  color: rgb(124, 128, 123);
}

.ace-tango-in-twilight .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tango-in-twilight {
  background-color: rgba(0, 0, 0, 0.95);
  color: #F8FFF6;
}

.ace-tango-in-twilight .ace_cursor {
  color: #A7A7A7;
}

.ace-tango-in-twilight .ace_marker-layer .ace_selection {
  background: rgba(105, 48, 162, 0.60);
}

.ace-tango-in-twilight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.95);
  border-radius: 2px;
}

.ace-tango-in-twilight .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-tango-in-twilight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-tango-in-twilight .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031);
}

.ace-tango-in-twilight .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031);
}

.ace-tango-in-twilight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(105, 48, 162, 0.60);
}

.ace-tango-in-twilight .ace_fold {
    background-color: #C4A000;
    border-color: #F8FFF6;
}
.ace-tango-in-twilight .ace_keyword{color:#C4A000;}
.ace-tango-in-twilight .ace_constant{color:#CF6A4C;}
.ace-tango-in-twilight .ace_support{color:#75507B;}
.ace-tango-in-twilight .ace_support.ace_function{color:#DAD085;}
.ace-tango-in-twilight .ace_support.ace_constant{color:#CF6A4C;}
.ace-tango-in-twilight .ace_storage{color:#F9EE98;}
.ace-tango-in-twilight .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(86, 45, 86, 0.75);}
.ace-tango-in-twilight .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#D2A8A1;}
.ace-tango-in-twilight .ace_string{color:#4E9A06;}
.ace-tango-in-twilight .ace_string.ace_regexp{color:#E9C062;}
.ace-tango-in-twilight .ace_comment{font-style:italic;
color:#686A78;}
.ace-tango-in-twilight .ace_variable{color:#729FCF;}
.ace-tango-in-twilight .ace_meta.ace_tag{color:#AC885B;}
.ace-tango-in-twilight .ace_markup.ace_heading{color:#CC0000;}
.ace-tango-in-twilight .ace_markup.ace_list{color:#C4A000;}
`;

ace.define("ace/theme/tango-in-twilight-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/tango-in-twilight", ["require", "exports", "module", "ace/theme/tango-in-twilight-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-tango-in-twilight";
	exports.cssText = require("./tango-in-twilight-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
