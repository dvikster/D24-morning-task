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
    var out2 ='';
    console.log('значение инпута - ' + a);
    // out2 ='';

    for(key in eventArray){

        if(+a >= +key){

            console.log('значение ключа -' + key);
            out += eventArray[key]+'<br>';
        }
        else if( a != key){
            console.log('Записей нет ');
            out2 = 'Записей нет ';
        }
    }
    $('.events2').html(out2);
    $('.events').html(out);

}



//  "1": "Событие один",
//  "2": "Событие два",
//  "3": "Событие три",
//  "4": "Событие четыре",

