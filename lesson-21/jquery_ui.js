$(function () {
    $("#dragable").draggable();

    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    $("#resizable").resizable({
        ghost: true
    });

    $("#sortable").sortable();
    $("#sortable").disableSelection();
    
//widgets
     $("#Accordion").accordion();
    
    var contries =[
        'Ukraine',
        'USA',
        'Latvia',
        'Germany',
        'Spain',
        'BeloRussia',
        'Estonia',
        'Mexico',
        'Canada',
        'Egypt'
    ];
    
    $("#autocomplete").autocomplete({
        source: contries
    });
    
     $("#datePicker").datepicker();
    
     $("#menu").menu();
    
      $("#progressBar").progressbar({
          value:73
      });
});






