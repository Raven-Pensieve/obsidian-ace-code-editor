import * as ace from "ace-builds";

const cssText = `
.ace-herokucodesamples .ace_gutter {
  background: #39434B;
  color: rgb(153, 158, 162);
}

.ace-herokucodesamples .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-herokucodesamples {
  background-color: #39434B;
  color: #F8F8F8;
}

.ace-herokucodesamples .ace_cursor {
  color: #FFFFFF;
}

.ace-herokucodesamples .ace_marker-layer .ace_selection {
  background: #A0CCFF;
}

.ace-herokucodesamples.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #39434B;
  border-radius: 2px;
}

.ace-herokucodesamples .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-herokucodesamples .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-herokucodesamples .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-herokucodesamples .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-herokucodesamples .ace_marker-layer .ace_selected-word {
  border: 1px solid #A0CCFF;
}

.ace-herokucodesamples .ace_fold {
    background-color: #F7F7F7;
    border-color: #F8F8F8;
}
.ace-herokucodesamples .ace_keyword{color:#FBDE2D;}
.ace-herokucodesamples .ace_constant.ace_language{color:#D8FA3C;}
.ace-herokucodesamples .ace_constant.ace_numeric{color:#D8FA3C;}
.ace-herokucodesamples .ace_constant.ace_character{color:#D8FA3C;}
.ace-herokucodesamples .ace_constant.ace_other{color:#D8FA3C;}
.ace-herokucodesamples .ace_string{color:#8DA6CE;}
.ace-herokucodesamples .ace_comment{color:#AEAEAE;}
.ace-herokucodesamples .ace_variable{color:#F7F7F7;}
.ace-herokucodesamples .ace_variable.ace_language{color:#D8FA3B;}
.ace-herokucodesamples .ace_variable.ace_parameter{color:#8DA6CE;}
.ace-herokucodesamples .ace_entity.ace_name.ace_function{color:#F7F7F7;}
`;

ace.define("ace/theme/herokucodesamples-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/herokucodesamples", ["require", "exports", "module", "ace/theme/herokucodesamples-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-herokucodesamples";
	exports.cssText = require("./herokucodesamples-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
