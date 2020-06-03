// taken from: https://stackoverflow.com/questions/56278503/print-markdown-file-from-github
// open dev options and paste into console

javascript:document.querySelector('.markdown-body').setAttribute('style', 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; background-color: white; border:0');document.querySelector('body').appendChild(document.querySelector('.markdown-body'));window.print()
