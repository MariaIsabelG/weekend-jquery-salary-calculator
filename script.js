//console.log( 'js' );
$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is loaded' );
$( '#add-btn' ).on( 'click', addEmployee );


}

// input that collects data employee first name, last name, ID number, job title, annual salary
function addEmployee(){
    let name = $( '#name-in' ).val();
    let lastName = $( '#last-name')
    $( '#table-name' ).append( `<td>${name}</td>`);
    $( '#name-in' ).val( '' );

}