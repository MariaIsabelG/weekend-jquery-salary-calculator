//console.log( 'js' );
$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is loaded' );
$( '#add-btn' ).on( 'click', addEmployee );
$( 'tbody' ).on( 'click', '.delete-btn', deleteEmployee );


}

// collects input data
// outputs data in a table
function addEmployee(){

    //let newEmployee = [name, lastName, identify, jobTitle, salary] 

    let name = $( '#name-in' ).val();
    let lastName = $( '#last-name').val();
    let identify = $( '#identify' ).val();
    let jobTitle = $( '#job-title' ).val();
    let salary = $( '#salary' ).val();

    let addNewEmployee = `<tr class="new-row"><td>${name}</td>, <td>${lastName}</td>, <td>${identify}</td>, <td>${jobTitle}</td>, <td>${salary}</td>, <td><button class="delete-btn">DELETE</button></td></tr>`;

$( 'tbody' ).append( addNewEmployee );

$( '#name-in' ).val( '' );
$( '#last-name').val( '' );
$( '#identify' ).val( '' );
$( '#job-title' ).val( '' );
$( '#salary' ).val( '' );
}

function deleteEmployee(){

 $(this).closest ('tr').remove ();

};