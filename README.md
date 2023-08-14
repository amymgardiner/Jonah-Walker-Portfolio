# Jonah Walker's Portfolio

## About
I wanted to practice making another portfolio website, after the one I created for myself as part of an assignment in my coding boot camp.

As a challenge, I did not have a design to base this site off of, and I didn't have complete design control as I worked with Jonah to create the portfolio page he was invisioning.

We started this site with a dark-mode theme in mind and minimal color, as the videos and images would serve as the main focus of each page. Animations would also be kept small because of this, so there are only a few slight [hover effects](https://ianlunn.github.io/Hover/) throughout the site. Additionally, we used [Google Fonts](https://fonts.google.com/) to get the right look Jonah wanted for the text across the site.

This was a fun project for code practice and I hope you enjoy it!

## How it was built

I used React to build this app. I made sure to follow the React practice of code-splitting by having several components. I used the [react-router-dom](https://www.npmjs.com/package/react-router-dom) library to have the navigation function correctly, so users can get to each individual page.

For styling, I used regular CSS and [Tailwind CSS](https://tailwindcss.com/docs/installation).

On the About page, we wanted the form to actually function so potential clients could contact Jonah. To achieve this I used [react-hook-form](https://www.npmjs.com/package/react-hook-form), [react-toastify](https://www.npmjs.com/package/react-toastify), and [emailjs-com](https://www.npmjs.com/package/emailjs-com) libraries and the free [EmailJS](https://www.emailjs.com/) service.