function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code');
    let domStyle = document.querySelector('#styleTag');
    domCode.innerHTML = prefix || '';
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domCode.innerHTML = Prism.highlight(prefix+code.substring(0, n), Prism.languages.css);
        domStyle.innerHTML = prefix + code.substring(0,n);
        domCode.scrollTop = domCode.scrollHeight;
        if (n > code.length) {
            window.clearInterval(id);
            fn.call();
        }
    }, 50)
}

function createPaper(fn) {
    let paper = document.createElement('div');
    let codeWrapper = document.querySelector('#code-wrapper');
    let wrapper = document.querySelector('#wrapper');
    let paperCon = document.createElement('pre');
    paper.id = 'paper';
    paperCon.className = 'paperCon';
    wrapper.insertBefore(paper,codeWrapper);
    paper.appendChild(paperCon);
    fn.call();
}

function writeMd(code,fn){
    let md = document.querySelector('.paperCon');
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        md.innerHTML = code.substring(0,n);
        md.scrollTop = md.scrollHeight;
        if (n > code.length) {
            window.clearInterval(id);
            fn.call();
        }
    },50)
}

function mdToHtml(fn){
    let md = document.querySelector('#paper > .paperCon');
    md.innerHTML = marked(md.innerHTML);
    fn.call();
}

var content = `/*
* 面试官你好，
* 我是陈敏佳，
* 我应聘的是贵司的前端工程师。
* 只用文字表达太无聊了……
* 下面我将用代码展示我的简历 :)
* 首先需要给我的简历来点样式
*/

* {
    transition: all 1s;
}

html {
    background: #EEEEEE;
}

/*加个边框，方便布局*/

#code {
    border: 1px solid #aaa;
    padding: 16px;
    background: #FAFAFA;
}

/*现在我需要一点代码高亮*/

.token.comment {
    color: slategray;
}

.token.selector{
    color: #690;
}

.token.property{
    color: #905;
}

.token.punctuation{
    color: #999;
}

/*再加一个呼吸效果*/

#code {
    animation: breath 1s infinite alternate-reverse;
}

#code-wrapper {
    margin-right: 0;
}

/*简历的当然需要一张白纸了*/

#paper > .paperCon {
    height: 100%;
    width: 100%;
}

/*好了，现在我们正式开始吧。*/

`
var md = `
## 自我介绍
- 姓   名：陈敏佳
- 出生年月：1996.07
- 毕业学校：浙江传媒学院
- 应聘岗位：前端工程师

## 技能介绍
熟悉 JavaScript CSS

## 项目作品
1. XXX 轮播
2. XXX 简历
3. XXX 画板

## 联系方式
- 手机：178****6096
- 邮箱：mjchen404@qq.com
- QQ:3140*****

## 联系方式
- 手机：178****6096
- 邮箱：mjchen404@qq.com
- QQ:3140*****

## 联系方式
- 手机：178****6096
- 邮箱：mjchen404@qq.com
- QQ:3140*****

## 联系方式
- 手机：178****6096
- 邮箱：mjchen404@qq.com
- QQ:3140*****

## 联系方式
- 手机：178****6096
- 邮箱：mjchen404@qq.com
- QQ:3140*****
`

var content2 = `/*然后再把简历以 markdown 形式展示*/`

var content3 = `

/*
* 这就是我的简历，
* 谢谢观看！
*/`

writeCode('',content,() => {
    createPaper(() => {
        writeMd(md,() => {
            writeCode(content,content2,() => {
                mdToHtml(() => {
                    writeCode(content+content2,content3)
                });
            })
        });
    });
});




