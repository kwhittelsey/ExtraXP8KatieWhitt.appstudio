/*
Scenario: You want to print a grid with the number of columns and rows that the user wants. 
You will print out an asterisk '*' for each cell. 
Ask the user for the number of rows and columns to use. 
Their request must be between 1 and 10 rows and 1 and 10 columns. 
*/

row=prompt('Enter number of rows desired:')
rowInt=parseInt(row, 10)
column=prompt('Enter number of columns desired:')
columnInt=parseInt(column, 10)

for(i=0;i<rowInt;i++){
  document.writeln('<br />'+'*')
  for (j=1;j<columnInt;j++){
    document.writeln('*')}
    }