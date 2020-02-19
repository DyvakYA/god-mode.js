let e = document.getElementsByTagName('input'), i;
for(i = 0; i < e.length; ++i) {
    e[i].disabled = false;
}
e = document.getElementsByTagName('textarea');
for(i = 0; i < e.length; ++i) {
    e[i].disabled = false;
}