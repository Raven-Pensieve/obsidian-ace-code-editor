import * as ace from "ace-builds";

const cssText = `
.ace-rubyrobot .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-rubyrobot .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-rubyrobot {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-rubyrobot .ace_cursor {
  color: #FFFFFF;
}

.ace-rubyrobot .ace_marker-layer .ace_selection {
  background: rgba(74, 140, 219, 0.70);
}

.ace-rubyrobot.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-rubyrobot .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-rubyrobot .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-rubyrobot .ace_marker-layer .ace_active-line {
  background: rgba(58, 58, 0, 0.48);
}

.ace-rubyrobot .ace_gutter-active-line {
  background-color: rgba(58, 58, 0, 0.48);
}

.ace-rubyrobot .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(74, 140, 219, 0.70);
}

.ace-rubyrobot .ace_fold {
    background-color: #AAAAAA;
    border-color: #FFFFFF;
}
.ace-rubyrobot .ace_keyword{color:#D01D33;}
.ace-rubyrobot .ace_constant{color:#367C1B;}
.ace-rubyrobot .ace_support.ace_function{color:#CBC3B1;}
.ace-rubyrobot .ace_support.ace_class{color:#DF864D;}
.ace-rubyrobot .ace_storage{color:#3185B9;}
.ace-rubyrobot .ace_string{color:#60F400;}
.ace-rubyrobot .ace_string.ace_regexp{color:#D8E600;}
.ace-rubyrobot .ace_comment{color:#A28075;}
.ace-rubyrobot .ace_variable{color:#AAAAAA;}
.ace-rubyrobot .ace_variable.ace_parameter{color:#C3C3C3;}
.ace-rubyrobot .ace_meta.ace_tag{color:#AAAAAA;}
.ace-rubyrobot .ace_entity.ace_other.ace_attribute-name{color:#367C1B;}
.ace-rubyrobot .ace_entity.ace_name.ace_function{color:#AAAAAA;}
`;

(ace as any).define("ace/theme/rubyrobot-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/rubyrobot", ["require", "exports", "module", "ace/theme/rubyrobot-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-rubyrobot";
	exports.cssText = require("./rubyrobot-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
