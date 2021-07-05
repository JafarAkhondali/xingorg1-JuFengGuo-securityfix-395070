// import { injectGlobal } from 'styled-components';
// injectGlobal`
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
// ` // 以上代码被弃用。
import {createGlobalStyle} from 'styled-components';
export const GlobalStyled = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body{
        margin:0;
        padding:0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    button {
        border: none
    }
    @font-face {font-family: "iconfont";
        src: url('../fonts/iconfont.eot?t=1583658254672'); /* IE9 */
        src: url('../fonts/iconfont.eot?t=1583658254672#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('../fonts/iconfont.woff?t=1583658254672') format('woff'),
        url('../fonts/iconfont.ttf?t=1583658254672') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('../fonts/iconfont.svg?t=1583658254672#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-tianjiajiahaowubiankuang:before {
        content: "\\e81a";
    }

    .icon-comment:before {
        content: "\\e638";
    }

    .icon-icontd:before {
        content: "\\e626";
    }

    .icon-huanyihuan:before {
        content: "\\e62d";
    }

    .icon-dongtai:before {
        content: "\\e629";
    }

    .icon-tongzhi:before {
        content: "\\e61e";
    }

    .icon-pinglun:before {
        content: "\\e64b";
    }

    .icon-zhuye:before {
        content: "\\e60e";
    }

    .icon-shuben:before {
        content: "\\e60a";
    }

    .icon-shoucang:before {
        content: "\\e60d";
    }

    .icon-shoucang1:before {
        content: "\\e613";
    }

    .icon-sousuo:before {
        content: "\\e639";
    }

    .icon-tongzhi1:before {
        content: "\\e607";
    }

    .icon-duigou_huabanfuben:before {
        content: "\\e65f";
    }

    .icon-x:before {
        content: "\\e7bd";
    }

    .icon-jihe:before {
        content: "\\e637";
    }

    .icon-faxian:before {
        content: "\\e726";
    }

    .icon-kan:before {
        content: "\\e600";
    }

    .icon-yushouhuore:before {
        content: "\\e662";
    }

    .icon-shuji:before {
        content: "\\e615";
    }

    .icon-yumaobi:before {
        content: "\\e6e5";
    }

    .icon-wenzhang_huaban:before {
        content: "\\e62e";
    }


`