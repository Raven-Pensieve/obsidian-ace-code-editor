import * as ace from "ace-builds";

const cssText = `
.ace-ilife-06 .ace_gutter {
  background: rgba(255, 255, 255, 0.99);
  color: rgb(153, 153, 153);
}

.ace-ilife-06 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ilife-06 {
  background-color: rgba(255, 255, 255, 0.99);
  color: #333333;
}

.ace-ilife-06 .ace_cursor {
  color: #333333;
}

.ace-ilife-06 .ace_marker-layer .ace_selection {
  background: rgba(255, 172, 227, 0.74);
}

.ace-ilife-06.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(255, 255, 255, 0.99);
  border-radius: 2px;
}

.ace-ilife-06 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ilife-06 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(215, 106, 0, 0.30);
}

.ace-ilife-06 .ace_marker-layer .ace_active-line {
  background: rgba(199, 195, 162, 0.74);
}

.ace-ilife-06 .ace_gutter-active-line {
  background-color: rgba(199, 195, 162, 0.74);
}

.ace-ilife-06 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 172, 227, 0.74);
}

.ace-ilife-06 .ace_fold {
    background-color: #FFFFFF;
    border-color: #333333;
}
.ace-ilife-06 .ace_keyword{color:#000000;
background-color:rgba(252, 232, 236, 0.10);}
.ace-ilife-06 .ace_constant.ace_language{color:#1C7A1F;}
.ace-ilife-06 .ace_constant.ace_numeric{color:#69B200;}
.ace-ilife-06 .ace_constant.ace_character{color:#1C7A1F;
background-color:rgba(182, 212, 143, 0.15);}
.ace-ilife-06 .ace_constant.ace_other{color:#1C7A1F;
background-color:rgba(182, 212, 143, 0.15);}
.ace-ilife-06 .ace_support.ace_constant{color:#69B200;
background-color:rgba(182, 212, 143, 0.25);}
.ace-ilife-06 .ace_support.ace_class{color:#1C7A1F;
background-color:rgba(28, 122, 31, 0.051);}
.ace-ilife-06 .ace_storage{color:#554B4B;
background-color:#FFFCD1;}
.ace-ilife-06 .ace_string{color:#69B200;
background-color:rgba(255, 251, 188, 0.10);}
.ace-ilife-06 .ace_comment{color:#FFFFFF;
background-color:#DE2B7F;}
.ace-ilife-06 .ace_variable{color:#308095;}
.ace-ilife-06 .ace_variable.ace_language{color:#308095;}
.ace-ilife-06 .ace_meta.ace_tag{color:#39A0BA;
background-color:rgba(57, 160, 186, 0.10);}
.ace-ilife-06 .ace_entity.ace_name.ace_function{color:#FFFFFF;
background-color:#69B200;}
.ace-ilife-06 .ace_entity.ace_name.ace_tag{color:#308095;}
`;

(ace as any).define("ace/theme/ilife-06-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/ilife-06", ["require", "exports", "module", "ace/theme/ilife-06-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-ilife-06";
	exports.cssText = require("./ilife-06-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
