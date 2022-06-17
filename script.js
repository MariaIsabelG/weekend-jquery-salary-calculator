//console.log( 'js' );
$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is loaded' );
$( '#add-btn' ).on( 'click', addEmployee );


}

// input that collects data employee first name, last name, ID number, job title, annual salary
function addEmployee(){
    let name = $( '#name-in' ).val();
    let lastName = $( '#last-name').val();
    let identify = $( '#identify' ).val();
    let jobTitle = $( '#job-title' ).val();
    let salary = $( '#salary' ).val();

    $( '#table-name' ).append( `<td>${name}</td>`);
    $( '#name-in' ).val( '' );

    $( '#table-last-name' ).append( `<td>${lastName}</td>`);
    $( '#name-in' ).val( '' );

    $( '#table-identify' ).append( `<td>${identify}</td>`);
    $( '#name-in' ).val( '' );

    $( '#table-title' ).append( `<td>${jobTitle}</td>`);
    $( '#name-in' ).val( '' );

    $( '#table-salary' ).append( `<td>${salary}</td>`);
    $( '#name-in' ).val( '' );

}