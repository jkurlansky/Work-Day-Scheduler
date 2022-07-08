
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


$(".saveBtn").on("click", function(){
    var val = $(this).siblings(".description").val();
    console.log(val);
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, val);
})

for(var i=8; i<18; i++){
    $("#"+i+" .description").val(localStorage.getItem(i));
}

function hourColor(){
    var currentTime = moment().hour();
    
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime);

        if(blockTime < currentTime){
            $(this).addClass("past");
        }
        else if(blockTime === currentTime)
        {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

hourColor();

var interval = setInterval(hourColor, 10000);
