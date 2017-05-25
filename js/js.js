$(document).ready(function () {

    $('#event-range').on('change',getEvents);
});
var eventArray={};
var a = 0;

$.getJSON('package.json',function (data) {
    console.log(data);
    eventArray = data;
});

function getEvents() {
    a =$('#event-range').val();
    var out ='';
    console.log('значение инпута - ' + a);

    for(var key in eventArray){
        a=parseInt(a);
        key=parseInt(key);
        if(key<=a){
            console.log('значение ключа -' + key);
            out += '<li>'+eventArray[key]+'</li>';
        }
    }
    if (out==''){
        $('.events').html('Записей нет');
    }
    else {
        $('.events').html(out);
    }
}



//  "1": "Событие один",
//  "2": "Событие два",
//  "3": "Событие три",
//  "4": "Событие четыре",