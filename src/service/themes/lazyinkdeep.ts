import * as ace from "ace-builds";

const cssText = `
.ace-lazyinkdeep .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-lazyinkdeep .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-lazyinkdeep {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-lazyinkdeep .ace_cursor {
  color: #7C7C7C;
}

.ace-lazyinkdeep .ace_marker-layer .ace_selection {
  background: #E3FC8D;
}

.ace-lazyinkdeep.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-lazyinkdeep .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-lazyinkdeep .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #E1E1E1;
}

.ace-lazyinkdeep .ace_marker-layer .ace_active-line {
  background: rgba(239, 252, 166, 0.56);
}

.ace-lazyinkdeep .ace_gutter-active-line {
  background-color: rgba(239, 252, 166, 0.56);
}

.ace-lazyinkdeep .ace_marker-layer .ace_selected-word {
  border: 1px solid #E3FC8D;
}

.ace-lazyinkdeep .ace_fold {
    background-color: #FF6600;
    border-color: #000000;
}
.ace-lazyinkdeep .ace_keyword{color:#FF6600;}
.ace-lazyinkdeep .ace_constant{color:#3B5BB5;}
.ace-lazyinkdeep .ace_support{color:#3B5BB5;}
.ace-lazyinkdeep .ace_storage{color:#FF6600;}
.ace-lazyinkdeep .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-lazyinkdeep .ace_invalid.ace_deprecated{font-style:italic;
color:#990000;}
.ace-lazyinkdeep .ace_string{color:#409B1C;}
.ace-lazyinkdeep .ace_comment{color:#ACADAC;}
.ace-lazyinkdeep .ace_meta.ace_tag{color:#3A4A64;}
`;

ace.define("ace/theme/lazyinkdeep-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/lazyinkdeep", ["require", "exports", "module", "ace/theme/lazyinkdeep-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-lazyinkdeep";
	exports.cssText = require("./lazyinkdeep-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
