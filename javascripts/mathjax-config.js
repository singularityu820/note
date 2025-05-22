/*
 * @Author: BosenMiao 3376308736@qq.com
 * @Date: 2025-05-22 23:11:32
 * @LastEditors: BosenMiao 3376308736@qq.com
 * @LastEditTime: 2025-05-22 23:11:37
 * @FilePath: \artical\docs\javascripts\mathjax-config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* mathjax-loader.js  file */
/* ref: http://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/ */
(function (win, doc) {
    win.MathJax = {
      config: ["MMLorHTML.js"],
      extensions: ["tex2jax.js"],
      jax: ["input/TeX"],
      tex2jax: {
        inlineMath: [ ["\\(","\\)"] ],
        displayMath: [ ["\\[","\\]"] ]
      },
      TeX: {
        TagSide: "right",
        TagIndent: ".8em",
        MultLineWidth: "85%",
        equationNumbers: {
          autoNumber: "AMS",
        },
        unicode: {
          fonts: "STIXGeneral,'Arial Unicode MS'"
        }
      },
      displayAlign: 'center',
      showProcessingMessages: false,
      messageStyle: 'none'
    };
  })(window, document);
  