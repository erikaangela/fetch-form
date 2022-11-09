# Fetch Form

A basic form that only allows submission after completion of all fields.

### Project Goals

* Apply React, Axios, and the [Fetch Rewards API](https://frontend-take-home.fetchrewards.com/form).
* Only allow submission if all fields are filled out properly.
* Provide feedback upon successful form submission.

### How the app works

The one-page site displays a form with the following required inputs:

* Full Name
* Email
* Password
* Occupation
* State

The Occupation and State dropdown menus are obtained from a GET request to the API. If a field is not filled out upon submission, an error message is returned (i.e., a red "Required" or email specific feedback). If the submission is successful, all error messages disappear, a POST request with the form's values is made to the API, and a success message is displayed.

### Technologies Used

* JavaScript
* HTML/CSS
* React JS
* APIs&mdash;[Fetch Rewards API](https://frontend-take-home.fetchrewards.com/form)
* Axios

## Quick Start

* Clone the app onto your local machine and open it.
* ````npm install```` within the cloned app.
* ````npm start```` after previous command done. It will open in localhost:3000.
