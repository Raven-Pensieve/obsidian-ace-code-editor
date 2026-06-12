import * as ace from "ace-builds";

const cssText = `
.ace-heroku .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-heroku .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-heroku {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-heroku .ace_cursor {
  color: #E6E6E6;
}

.ace-heroku .ace_marker-layer .ace_selection {
  background: rgba(200, 227, 245, 0.56);
}

.ace-heroku.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-heroku .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-heroku .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #524993;
}

.ace-heroku .ace_marker-layer .ace_active-line {
  background: #181818;
}

.ace-heroku .ace_gutter-active-line {
  background-color: #181818;
}

.ace-heroku .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(200, 227, 245, 0.56);
}

.ace-heroku .ace_fold {
    background-color: #BEB8E7;
    border-color: #FFFFFF;
}
.ace-heroku .ace_keyword{font-weight:bold;
color:#8B7AF7;}
.ace-heroku .ace_keyword.ace_operator{color:#EEEEEE;}
.ace-heroku .ace_constant{color:#54A5FF;}
.ace-heroku .ace_constant.ace_language{color:#FF6C60;}
.ace-heroku .ace_constant.ace_numeric{color:#FF73FD;}
.ace-heroku .ace_constant.ace_character.ace_escape{color:#E2F6F2;}
.ace-heroku .ace_support.ace_function{color:#E1F5B1;}
.ace-heroku .ace_support.ace_constant{color:#B2D72C;}
.ace-heroku .ace_support.ace_class{font-weight:bold;
color:#FFF7B0;}
.ace-heroku .ace_support.ace_type{font-weight:bold;
color:#FFF7B0;}
.ace-heroku .ace_storage{font-weight:bold;
color:#8B7AF7;}
.ace-heroku .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-heroku .ace_string{color:#C5F610;}
.ace-heroku .ace_comment{font-style:italic;
font-weight:bold;
color:#626262;}
.ace-heroku .ace_variable{color:#54A5FF;}
.ace-heroku .ace_variable.ace_language{color:#FF6C60;}
.ace-heroku .ace_variable.ace_parameter{font-style:italic;}
.ace-heroku .ace_meta.ace_tag{font-style:italic;
font-weight:bold;
color:#8B7AF7;}
.ace-heroku .ace_entity.ace_other.ace_attribute-name{color:#E1F5B1;}
.ace-heroku .ace_entity.ace_name.ace_function{color:#BEB8E7;}
.ace-heroku .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#8B7AF7;}
.ace-heroku .ace_markup.ace_heading{color:#4266A0;}
.ace-heroku .ace_markup.ace_list{color:#B90690;}
`;

ace.define("ace/theme/heroku-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/heroku", ["require", "exports", "module", "ace/theme/heroku-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-heroku";
	exports.cssText = require("./heroku-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
