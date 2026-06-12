import * as ace from "ace-builds";

const cssText = `
.ace-zachstronaut-theme-41 .ace_gutter {
  background: rgba(24, 19, 16, 0.98);
  color: rgb(140, 137, 136);
}

.ace-zachstronaut-theme-41 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-zachstronaut-theme-41 {
  background-color: rgba(24, 19, 16, 0.98);
  color: #FFFFFF;
}

.ace-zachstronaut-theme-41 .ace_cursor {
  color: #889AFF;
}

.ace-zachstronaut-theme-41 .ace_marker-layer .ace_selection {
  background: rgba(255, 0, 229, 0.50);
}

.ace-zachstronaut-theme-41.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(24, 19, 16, 0.98);
  border-radius: 2px;
}

.ace-zachstronaut-theme-41 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-zachstronaut-theme-41 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-zachstronaut-theme-41 .ace_marker-layer .ace_active-line {
  background: rgba(255, 1, 224, 0.078);
}

.ace-zachstronaut-theme-41 .ace_gutter-active-line {
  background-color: rgba(255, 1, 224, 0.078);
}

.ace-zachstronaut-theme-41 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 0, 229, 0.50);
}

.ace-zachstronaut-theme-41 .ace_fold {
    background-color: #6b72e6;
    border-color: #FFFFFF;
}
.ace-zachstronaut-theme-41 .ace_invalid{color:#FFFFFF;
background-color:#AA0000;}
.ace-zachstronaut-theme-41 .ace_comment{font-style:italic;
color:#0066FF;}
.ace-zachstronaut-theme-41 .ace_meta.ace_tag{color:#00CD00;}
.ace-zachstronaut-theme-41 .ace_entity.ace_other.ace_attribute-name{color:#9865FF;}
`;

ace.define("ace/theme/zachstronaut-theme-41-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/zachstronaut-theme-41", ["require", "exports", "module", "ace/theme/zachstronaut-theme-41-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-zachstronaut-theme-41";
	exports.cssText = require("./zachstronaut-theme-41-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
