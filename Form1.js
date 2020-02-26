/*
Scenario: You want to print a grid with the number of columns and rows that the user wants. 
You will print out an asterisk '*' for each cell. 
Ask the user for the number of rows and columns to use. 
Their request must be between 1 and 10 rows and 1 and 10 columns. 
*/

rows = parseInt(prompt("Enter how many rows you want between 1 and 10"))
columns = parseInt(prompt("Enter how many columns you want between 1 and 10"))

for(var i = 1; i<= rows; i++)
     {
          for(var j = 1; j <=columns; j++)
               {
               document.write("*");
               }
               document.write("<br />")
     }
