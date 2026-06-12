import * as ace from "ace-builds";

const cssText = `
.ace-creeper .ace_gutter {
  background: #000000;
  color: rgb(116, 116, 116);
}

.ace-creeper .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-creeper {
  background-color: #000000;
  color: #E8E8E8;
}

.ace-creeper .ace_cursor {
  color: #CDCDCD;
}

.ace-creeper .ace_marker-layer .ace_selection {
  background: rgba(114, 114, 114, 0.38);
}

.ace-creeper.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-creeper .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-creeper .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #484848;
}

.ace-creeper .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.17);
}

.ace-creeper .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.17);
}

.ace-creeper .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(114, 114, 114, 0.38);
}

.ace-creeper .ace_fold {
    background-color: #6D6D6D;
    border-color: #E8E8E8;
}
.ace-creeper .ace_keyword{color:#6D6D6D;}
.ace-creeper .ace_keyword.ace_operator{color:#925D4C;}
.ace-creeper .ace_constant{color:#6D6D6D;}
.ace-creeper .ace_constant.ace_numeric{color:#83979B;}
.ace-creeper .ace_support{color:#6D6D6D;}
.ace-creeper .ace_support.ace_function{color:#925D4C;}
.ace-creeper .ace_support.ace_constant{color:#6D6D6D;}
.ace-creeper .ace_storage{color:#6D6D6D;}
.ace-creeper .ace_invalid{color:#F45E43;}
.ace-creeper .ace_string{color:#606D51;}
.ace-creeper .ace_string.ace_regexp{color:#7C8E68;}
.ace-creeper .ace_comment{color:#555555;}
.ace-creeper .ace_variable{color:#E8E9E8;}
.ace-creeper .ace_meta.ace_tag{color:#8A9DA0;}
`;

ace.define("ace/theme/creeper-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/creeper", ["require", "exports", "module", "ace/theme/creeper-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-creeper";
	exports.cssText = require("./creeper-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
