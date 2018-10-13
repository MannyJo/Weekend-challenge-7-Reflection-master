# Redux Feedback Loop

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

"And my last reminder of the day, which is my last reminder of every day, is...?" - Luke


 For this assignment, you will be creating a feedback form modeled after Prime's system. Feedback will be collected over 4 views, and when all steps are complete, your app will save the feedback in the database. In a separate view, a user will be able to see all the collected feedback. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- [X] How are you feeling today?
- [X] allow user to put a number 1 to 5 in input box
- [X] if user clicks the next button, send to the next page
![feeling](wireframes/page-one.png)
- [X] How well are you understanding the content?
- [X] allow user to put a number 1 to 5 in input box
- [X] if user clicks the next button, send to the next page
![understanding](wireframes/page-two.png)
- [X] How well are you being supported?
- [X] allow user to put a number 1 to 5 in input box
- [X] if user clicks the next button, send to the next page
![support](wireframes/page-three.png)
- [X] Any comments you want to leave?
- [X] allow user to put a comment in input box
- [X] if user clicks the next button, save all the data user typed to database, and make redux state default and send to the success page.
![comments](wireframes/page-four.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

 When the form is complete, save the submission in the database. The user should see a submission success page.
 ![understanding](wireframes/page-five.png)

### DISPLAY FEEDBACK

Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

- [X] Admin page had a different header from other pages.
- [X] Display all the feedback and sort in descending time.
- [X] If the user clicks delete button, allow the user to confirm it.
- [X] If deleting is confirmed, delete the feedback in database, and on the DOM.

![display feedback](wireframes/admin.png)

## STRETCH GOALS

- [X] Update this README.md to describe the project in your own words
- [ ] Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons, and anything else you'd like.
- [ ] Add the ability to flag an existing feedback entry for further review on the /admin view
- [ ] Deploy your project to Heroku -- you'll need to read the special instructions for building and deploying with these apps! 


> NOTE: These stretch goals are intended to be completed in order.
