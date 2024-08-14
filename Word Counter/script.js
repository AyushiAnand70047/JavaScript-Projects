let wordCounts = function(words){
    document.getElementById('output').innerHTML = "words length is " + words;
};

document.getElementById('btn').onclick = function(){
    wordCounts(document.getElementById('words').value.length);
};