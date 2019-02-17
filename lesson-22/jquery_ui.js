$(function () {
    $("#slider").slider();

    var spinner = $("#spinner").spinner();
    $("#getSpinnerValue").on("click", function () {
        alert(spinner.spinner('value'));
    });
    $(document).tooltip();

    $("#tabs").tabs();

    $("#button").on("click", function () {
        $("#effect").addClass("customAddClass", 2000, function () {
            setTimeout(function () {
                $("#effect").removeClass("customAddClass");
            }, 2500);
        });
    });


    $("#customEffect").on("click", function () {
        runCustomEffect();
        return false;
    });

});

function runCustomEffect() {
    var selectedEffect = $("#effectTypes").val();
    var options = {};

    if (selectedEffect === "scale") {
        options = {
            percent: 50
        };
    } else if (selectedEffect === "transfer") {
        options = {
            to: "#customEffect",
            className: "UI-effects-transfer"
        };
    } else if (selectedEffect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    
    $("#effect").effect(selectedEffect, options, 500, function(){
        setTimeout(function(){
            $("#effect").removeAttr("style").hide().fadeIn();
        }, 1000);
    });
}