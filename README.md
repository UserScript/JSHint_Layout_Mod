> ### 警告

> 此项目已经停止更新，且无法在新版 JSHint.com 网站上正常工作。

# JSHint Layout Mod

A userscript to adjust page layout of JSHint.com.

![JSHint Layout Mod](https://f.cloud.github.com/assets/1231359/1015096/d0a00186-0bd0-11e3-8ef4-c6feccf74ca4.png)

## 简介

这个用户脚本用于调整 JSHint.com 的网页布局，使之更适用于日常工作。

## 功能

### 重新设计页面布局

* 关闭页头、页尾、导航等元素，精减不必要的提示信息。
* 将单列布局调整为双列，充分利用宽屏显示器，避免频繁的页面滚动。
* 在 Firefox 下默认启用垂直滚动条，避免页面高度变化时产生的页面跳动。

### 交互增强

* 增大 Lint 按钮，使之更易于点击。
* 输入框获得焦点后，自动清除上一次的校验结果，反馈更直观。
* 加强提示信息的对比度，更易于识别。
* 将选项框整体缩小，且默认隐藏（可通过开关重新打开或再次隐藏）。

## 建议

* 我们将选项框默认隐藏，是因为我们更推荐使用 [内联配置方式](http://www.jshint.com/docs/config/#inline_configuration)。
* 在网页端使用 JSHint 永远只能做为一种后备方式。您应该把 JSHint 整合到您的工作流程中去，并尽可能将它自动化。

## 兼容性

* 仅基于 Firefox + Greasemonkey 开发。
* 可能无法应用于 Chrome、Safari、Opera、IE 等浏览器。

## 安装

请到 [UserScript.org](http://userscripts.org/scripts/show/152538) 下载安装。

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
