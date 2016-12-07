/*function createHTML(int options[]) {
    var pollNum = options.length();
    var color = [];
    var sum = 0;
    
    
    var addHTML = document.GetElementsByClassName('question'); 
    addHTML.insertAdjacentHTML('beforeend', options.title);
    
    for (var i=0; i < pollNum; i++) {
        sum += options[i].votes;
    }
    
    for (var i=0; i < pollNum; i++){
        var color[i] = getRandomColor(); //get random color from color generator to mark the part of the pie chart
        
        var addHTML = document.GetElementsByClassName('pie'); 
        addHTML.insertAdjacentHTML('beforeend', '<div class="option-results"><div class="title" style=' + color[i] + '>' + options[i].title '</div> - ' + options[i].votes + ' (' + options[i].votes/sum + '%)</div>');
    }
}

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i= 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

*/