var mdstr = "";
var request = new XMLHttpRequest();
request.open('GET', 'README.md', true);

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        console.log("Markdown Loaded");
        mdstr = this.response;
    }
};
request.send();

function gen() {
    document.getElementById("cdiv").innerHTML = window.markdownit().render(mdstr);
}
function pri() {
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    mywindow.document.write('<html><head><title>TrueML Report</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById("cdiv").innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();

    return true;
}