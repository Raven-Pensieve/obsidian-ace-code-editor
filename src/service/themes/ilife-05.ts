import * as ace from "ace-builds";

const cssText = `
.ace-ilife-05 .ace_gutter {
  background: rgba(255, 255, 255, 0.99);
  color: rgb(153, 153, 153);
}

.ace-ilife-05 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ilife-05 {
  background-color: rgba(255, 255, 255, 0.99);
  color: #333333;
}

.ace-ilife-05 .ace_cursor {
  color: #A600F6;
}

.ace-ilife-05 .ace_marker-layer .ace_selection {
  background: rgba(166, 0, 246, 0.25);
}

.ace-ilife-05.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(255, 255, 255, 0.99);
  border-radius: 2px;
}

.ace-ilife-05 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ilife-05 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(215, 106, 0, 0.30);
}

.ace-ilife-05 .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 85, 0.10);
}

.ace-ilife-05 .ace_gutter-active-line {
  background-color: rgba(255, 255, 85, 0.10);
}

.ace-ilife-05 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(166, 0, 246, 0.25);
}

.ace-ilife-05 .ace_fold {
    background-color: bold;
    border-color: #333333;
}
.ace-ilife-05 .ace_keyword{font-weight:bold;
color:#000000;
background-color:rgba(252, 232, 236, 0.10);}
.ace-ilife-05 .ace_constant.ace_language{font-weight:bold;
color:#1C7A1F;}
.ace-ilife-05 .ace_constant.ace_numeric{font-weight:bold;
color:#69B200;}
.ace-ilife-05 .ace_constant.ace_character{color:#1C7A1F;
background-color:rgba(182, 212, 143, 0.15);}
.ace-ilife-05 .ace_constant.ace_other{color:#1C7A1F;
background-color:rgba(182, 212, 143, 0.15);}
.ace-ilife-05 .ace_support.ace_constant{color:#69B200;
background-color:rgba(182, 212, 143, 0.25);}
.ace-ilife-05 .ace_support.ace_class{color:#1C7A1F;
background-color:rgba(28, 122, 31, 0.051);}
.ace-ilife-05 .ace_storage{font-weight:bold;
color:#999999;
background-color:rgba(153, 153, 153, 0.10);}
.ace-ilife-05 .ace_string{color:#69B200;
background-color:rgba(255, 251, 188, 0.10);}
.ace-ilife-05 .ace_comment{font-style:italic;
color:#B35EED;
background-color:rgba(0, 0, 0, 0.031);}
.ace-ilife-05 .ace_variable{font-weight:bold;
color:#308095;}
.ace-ilife-05 .ace_variable.ace_language{font-weight:bold;
color:#308095;}
.ace-ilife-05 .ace_meta.ace_tag{color:#39A0BA;
background-color:rgba(57, 160, 186, 0.10);}
.ace-ilife-05 .ace_entity.ace_name.ace_function{font-weight:bold;
color:#FFFFFF;
background-color:#69B200;}
.ace-ilife-05 .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#308095;}
`;

ace.define("ace/theme/ilife-05-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/ilife-05", ["require", "exports", "module", "ace/theme/ilife-05-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-ilife-05";
	exports.cssText = require("./ilife-05-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
