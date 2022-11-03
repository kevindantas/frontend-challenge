# Upgrade challenge

First things first, thank you for taking the time reviewing the project.

Although the challenge don't have a time limit I used Monday and Tuesday to work on it and spend around 4-5 hours in total.


## Libraries used

### Styling
Used `styled-components` and `polished` for styling, I created all the components from scratch mostly to also show some of my thought process for creating new components.
UX wise I used the same fonts as Upgrade and tried to keep consistent with the visual identity by using the same colors and also the same idea from the logo which have a darker and lighter shad of green.

### State management

I used Redux toolkit and RTK Query to avoid some of the boilerplate with traditional react/redux projects and also get some caching out of thee box for endpoints like the `/colors`, so when the user goes back and forth between screens, the content for the dropdown is not be fetched again.

### Form validation

Used Formik and Yup to make the validations and to abstract some of the boilerplate logic, the form field components are using the `useField` hook making it easy to use those components for any other form that we have on the application.

### Testing

Used testing libary as its the same tool that we use at my current company with the user events to simulate user interactions.
I created just a simple test util to add the providers, but there could be some improvements on how I did the redux store testing.


## Improvements missing

### Theming
A lot of colors are hard coded on the styles, ideally I would add them into a theme file containing all colors making any changes in the future easier.

### Typescript
On the last interview Miller mentioned that Upgrade doesn't use Typescript so I started the challenge without TS with the intention of adding that as a last step if I had time. I don't want to go over the 3-6 hours recommended time so I left out of this version.


## Using the application

Although all forms are validated, I didn't blocked the user from going to the next step via URL if they haven't completed the previous step.
On a real life situation I would create those validation by checking on each page if we have data from the previous step and if not, redirect the user to the correct page.

So to simulate a 400 on the `/submit` endpoint, you can simply go to `/confirmation` and try to click submit.
Hopefully this will make the test a little bit easier to everyone :)