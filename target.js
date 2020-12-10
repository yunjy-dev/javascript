var body = document.body;
var table = document.createElement('table');

var rows = [];
var cols = [];

var callback = function (e){
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);

    var thisRow = rows.indexOf(e.target.parentNode);
    var thisCol = cols.indexOf(e.currentTarget);

    console.log('thisRow', thisRow, 'thisCol', thisCol);
    console.log('e.target', e.target);
    console.log('e.target', cols.indexOf(e.currentTarget));

}

for(var i=1; i<=3; i++){
    var row = document.createElement('tr');
    rows.push(row);
    cols.push([]);
    for(var j=1; j<=3; j++){
        var col = document.createElement('td');
        col.addEventListener('click', callback);
        cols[i-1].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}
body.appendChild(table);
console.log('rows', rows, 'cols', cols);