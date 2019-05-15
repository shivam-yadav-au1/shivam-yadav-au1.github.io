'use strict'

var globalCounter;
//Global Counter
$(document).ready(function(){
    $('#globalCounterButton').click(function(){
        var counter = $('#globalCounter').text()
        globalCounter = counter;
        globalCounter = parseInt(globalCounter)+1;
        $('#globalCounter').text(globalCounter);
    })
})


var objectCounter={
    counter: 1,

    incrementCounter: function(){
        console.log('incrementCounter called..')
        var value = $('#objectCounter').text()
        this.counter = value;
        this.counter++;
        $('#objectCounter').text(this.counter)
    }
};

// Object Counter
$('#objectCounterButton').click(function(){
    objectCounter.incrementCounter()
})


function closureCounter(){
    var count = 1;
    function counter(){
        var value = $('#closureCounter').text();
        count = value;
        count++;
        $('#closureCounter').text(count)
    }
    return counter;
}

//Closure Counter
$('#closureCounterButton').click(function(){
    var counter = closureCounter();
    counter();
})