# Project Name

JQuery Salary Calculator

## Description

Duration: 9 hours

Objective: 

- To sum up employee salaries by gathering the data through the use of user input and a table.

Problem solved:

- Created a page that gathers user input data and adds up values.

Layout: 

1. Inputs are created for name, last name, ID, title, and salary. Next to the inputs, a button called Add Employee is created. 

2. Below the inputs and the Add Button, a table called Data Table is created in the html file with the same headings as the inputs. 

3. Below the Data Table an h2 called Total Cost is created with a span of 0. 

jQuery functionality:

- The user inputs their data in the inputs at the top of the page. When they click the Add Button, two functions are triggered:

* addEmployee function:

** Gathers all the input data
** Adds a row in the table 
** Outputs all the user data and add a Delete Button to the new row in the Data Table
** Clears the values in the inputs (except for the salary input)

* calcTotal function: 

** Gathers the salary input value
** Adds it to the Total Cost
** Clears the values in the salary input

The Total Cost is updated every time a new salary is added. The Total Cost will turn red if its value is more than $20,000. 

Finally, when a user clicks on the Delete Button created in each new row of the Data Table, it will remove that row of data.



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
