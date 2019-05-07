'use strict'
var questions = []
var index = Math.floor(Math.random() * 10);
var intervel;
$(document).ready(function () {
    $.ajax({
        url: "quiz.json",
        method: "get",
        dataType: "json",
        success: function (data) {
            questions = data;
            displayQuestion();
            timer();
        },
        error: function () {
            alert("Error occured ");
        }
    })
})

var displayQuestion = function () {

    $('#question').html(questions[index].question);
}

var timer = function () {
    var timer = setInterval(function () {

        var count = parseInt($('#timer').html());
        if (count !== 0) {
            $('#timer').html(count - 1);
        } else {
            clearInterval(timer);
            alert("Time Out")
            $('#submitAnswer').attr('disabled',true);
        }
    }, 1000);
}

$('#submitAnswer').click(function () {
    var answer = $("#answer").val();

    if (answer.toLowerCase() == questions[index].answer.toLowerCase()) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
})
