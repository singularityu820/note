/*
 * @Author: BosenMiao 3376308736@qq.com
 * @Date: 2025-05-22 23:11:42
 * @LastEditors: BosenMiao 3376308736@qq.com
 * @LastEditTime: 2025-05-22 23:11:53
 * @FilePath: \artical\docs\javascripts\mathjax.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})