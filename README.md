# password_generator

This repository operates as a password generator.

Upon launching the webpage a function is called and the user is prompeted to give the total number of characters they would like in their password. The user must select a number that is between 8 and 128, inclusive. If the user does not select a number within this range they will recieve an alert to give a valid number in order to fit the criteria. Once entering a valid number the user is then asked to confirm if they want lower cased letters, upper cases letters, special characters, or numbers. The function then stores the values of the user's response as an object. A secondary function then takes that object and creates an array of all the possible characters the user can have in their password. After the array is created a for loop then iterates through the array and returns a "random" password of length the user requested. 

Images of deployed webpage can be found here: (password_generator/Images/generator image.png password_generator/Images/password image.png)


Deployed webpage can be found here: 