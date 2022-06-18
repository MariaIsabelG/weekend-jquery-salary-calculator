//console.log( 'js' );
$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is loaded' );// testing that jquery loaded

$( '#add-btn' ).on( 'click', addEmployee, calcTotal  ); // when user clicks on add employee button, run the addEmployee and calcTotal function
$( 'tbody' ).on( 'click', '.delete-btn', deleteEmployee ); // when the delete button is present in the table body, run deleteEmployee function

};


function addEmployee(){

// function turns input values into variables
let name = $( '#name-in' ).val();
let lastName = $( '#last-name').val();
let identify = $( '#identify' ).val();
let jobTitle = $( '#job-title' ).val();
let salary = $( '#salary' ).val();

// addNewEmployee variable creates a table row that includes:
// - user input data
// - delete button
let addNewEmployee = `<tr class="new-row"><td>${name}</td>, <td>${lastName}</td>, <td>${identify}</td>, <td>${jobTitle}</td>, <td>${salary}</td>, <td><button class="delete-btn">DELETE</button></td></tr>`;

// function appends the row to the existing table body and outputs all the user data
$( 'tbody' ).append( addNewEmployee );

// function clears the values of all inputs except for the salary input
$( '#name-in' ).val( '' );
$( '#last-name').val( '' );
$( '#identify' ).val( '' );
$( '#job-title' ).val( '' );

};

function deleteEmployee(){

    // function selects the row the delete button is in and removes it
    $(this).closest ('tr').remove ();

};

// global variable for the total counter 
let totalCost = 0;


function calcTotal(){

    // function turns salary input into a variable
    let newSalary = $( '#salary' ).val(); 

    // adds salary input to the totalCost counter
    totalCost += Number( newSalary );

    // takes the data in total-cost and preplaces it with the value of totalCost then appends totalCost value
    $( '#total-cost' ).text( totalCost );

    // empties out the salary input 
    $( '#salary' ).val( '' );

    // turns the total-title color red if totalCost is more that 20k
if( totalCost>20000){
    $( '#total-title' ).css( 'color', 'red');
    }
    
};
