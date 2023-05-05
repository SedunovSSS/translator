function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
readTextFile("/static/js/languages.json", function(text){
    var data = JSON.parse(text);
    var lang = document.getElementById('lang_').innerHTML;
    console.log(lang)
    for (var i in data){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = data[i];
        if (i == lang){
            opt.selected='selected';
        }
        document.getElementById('languages').appendChild(opt);
    }
});
