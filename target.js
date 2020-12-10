var body = document.body;
var table = document.createElement('table');

var rows = [];
var cols = [];

for(var i=1; i<=3; i++){
    var row = document.createElement('tr');
    rows.push(row);
    cols.push([]);
    for(var j=1; j<=3; j++){
        var col = document.createElement('td');
        col.addEventListener('click', function callback(){
        });
        cols[i-1].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}
body.appendChild(table);
console.log('rows', rows, 'cols', cols);