# Mad Lib

Mad libs are funny stories created on the spot. Fill in a word for each prompt. Click on the “Tell Story” Button and a funny story will be made with the words you provided! The results are usually hilarious.

Key Learnings on removing, storing/saving and retrieving session data from the browser:

1. When the application starts remove the old session data from the browser using:
   sessionStorage.removeItem("nameOfKey") 
   Note: removeItem() takes a string. If the variable is already a string, no need to use quotes while passing the argument.
         Check in dev tools under application => session storage if the session info is removed after execution of removeItem()
   
2. Upon submit/save button click, inside event listener for this button - save or set the session data using:
   sessionStorage.setItem("nameOfKey", JSON.stringify(dataObj))
   Note: Again, the 1st arg must be a string and 2nd arg is the actual data that we want to save in the browser.
         2nd arg passed must be in json format therefore JSON.stringify the object.
         You can check in the dev tools under application => session storage. The data should be there after setItem()
     
3. We can get the session data from the browser using:
   const sessionData = JSON.parse(sessionStorage.getItem("nameOfKey"))
   Note: Once again, getItem() takes a string and it should be the key. If its already a string no need to use quotes.
         We must parse the returned object from json to javascript format before using in JS code.
         
