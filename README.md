# Marfeel 

This program allows to see a circular graph and another in the form of an area, 
in which the income is shown,
impressions and visits through tablets and smartphones.

####In order to compile the program you just have to start index.htm

####The next step is to create a graphical interface for entering data.

#####The data can be modified in the following way:


To change the percentages: .6 === 60%

    .start(3000, 0, .6); 
    
'.6' equal to 60%. So changing this data changes the percentage always
 of smartphones. So the other percentage is the remaining 40% for tablets.

#####To change the amounts of the data:

    d = Math.floor(d / 6 * 5000000);

We just have to change the last parameter. In this case the 5000000.

#####To change the data of the graphs we can access its corresponding file depending on what it is for:

    chart-revenue.js
    chart-impresions.js
    chart-visits.js
    
