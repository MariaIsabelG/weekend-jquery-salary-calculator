//console.log( 'js' );
$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is loaded' );
$( '#add-btn' ).on( 'click', addEmployee );


}

// input that collects data employee first name, last name, ID number, job title, annual salary
function addEmployee(){

    //let newEmployee = [name, lastName, identify, jobTitle, salary] 

    let name = $( '#name-in' ).val();
    let lastName = $( '#last-name').val();
    let identify = $( '#identify' ).val();
    let jobTitle = $( '#job-title' ).val();
    let salary = $( '#salary' ).val();
    let addNewEmployee = ` <tr><td>${name}</td>, <td>${lastName}</td>, <td>${identify}</td>, <td>${jobTitle}</td>, <td>${salary}</td></tr>`;

$( 'tbody' ).append( addNewEmployee );

$( '#name-in' ).val( '' );
$( '#last-name').val( '' );
$( '#identify' ).val( '' );
$( '#job-title' ).val( '' );
$( '#salary' ).val( '' );
}