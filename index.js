var body = document.body;
var word = document.createElement('div');
word.textContent = '시작';
body.append(word);

var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);

var btn = document.createElement('button');
form.append(btn);
btn.textContent = '입력';

// body.append(document.createElement('br'));

var result = document.createElement('result');
body.append(result);
result.textContent = '결과'

