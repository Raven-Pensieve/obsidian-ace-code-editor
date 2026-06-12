import * as ace from "ace-builds";

const cssText = `
.ace-twilight-bright .ace_gutter {
  background: #FFFFFF;
  color: rgb(160, 160, 160);
}

.ace-twilight-bright .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-twilight-bright {
  background-color: #FFFFFF;
  color: #404040;
}

.ace-twilight-bright .ace_cursor {
  color: #A7A7A7;
}

.ace-twilight-bright .ace_marker-layer .ace_selection {
  background: #6FA8D1;
}

.ace-twilight-bright.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-twilight-bright .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-twilight-bright .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.ace-twilight-bright .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.039);
}

.ace-twilight-bright .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.039);
}

.ace-twilight-bright .ace_marker-layer .ace_selected-word {
  border: 1px solid #6FA8D1;
}

.ace-twilight-bright .ace_fold {
    background-color: #CF7900;
    border-color: #404040;
}
.ace-twilight-bright .ace_keyword{color:#CF7900;
background-color:rgba(207, 121, 1, 0.059);}
.ace-twilight-bright .ace_constant{color:#B23F1E;
background-color:rgba(178, 63, 29, 0.071);}
.ace-twilight-bright .ace_support{color:#A66BAB;
background-color:rgba(166, 107, 170, 0.10);}
.ace-twilight-bright .ace_support.ace_function{color:#00959E;
background-color:rgba(0, 149, 159, 0.10);}
.ace-twilight-bright .ace_support.ace_constant{color:#B23F1D;
background-color:#FFFFFF;}
.ace-twilight-bright .ace_storage{color:#D2AD00;
background-color:rgba(190, 153, 0, 0.10);}
.ace-twilight-bright .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(153, 104, 150, 0.99);}
.ace-twilight-bright .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#9C7D77;}
.ace-twilight-bright .ace_string{color:#5F9411;
background-color:rgba(95, 148, 16, 0.10);}
.ace-twilight-bright .ace_string.ace_regexp{color:#32986F;
background-color:rgba(50, 152, 111, 0.051);}
.ace-twilight-bright .ace_comment{font-style:italic;
color:#A49DA5;
background-color:rgba(164, 157, 165, 0.10);}
.ace-twilight-bright .ace_variable{color:#6B82A7;
background-color:rgba(107, 130, 167, 0.10);}
.ace-twilight-bright .ace_meta.ace_tag{color:#9F621D;}
.ace-twilight-bright .ace_markup.ace_heading{color:#CF6A4C;}
.ace-twilight-bright .ace_markup.ace_list{color:#787249;}
`;

ace.define("ace/theme/twilight-bright-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/twilight-bright", ["require", "exports", "module", "ace/theme/twilight-bright-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-twilight-bright";
	exports.cssText = require("./twilight-bright-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
