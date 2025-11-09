## EIGHT25MEDIA — Cypress test assignment

This README explains what's included, how the tests work, and how to run them locally.

## What's included

- `cypress/e2e/homepage.cy.js` — Desktop viewport tests.
	- Verifies page title contains `eight25`.
	- Navigates to the "Work" page and asserts "Our Work" is visible and the URL contains `/work`.
	- Scrolls to the footer, navigates to the Contact page, fills the contact form (name, email, message) and asserts the values were entered.

- `cypress/e2e/homepage-mobile.cy.js` — Mobile viewport test.
	- Sets a mobile viewport (375x677) and visits the homepage.
	- Asserts the hamburger menu is visible on small screens.

## Prerequisites

- Node.js and npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Open Cypress in interactive mode (recommended while developing):

```bash
npx cypress open
```

3. Run tests headlessly (CI-friendly):

```bash
npx cypress run
```

You can also run an individual spec with the `--spec` flag, e.g.:

```bash
npx cypress run --spec "cypress/e2e/homepage.cy.js"
```

You can also use the cypress UI to run these tests



## Section 4
### Explain in writing:
> Q. If you had to automate the same flow (Homepage → Work → Contact form) using a low-code or AI-powered automation tool (e.g., Testim, Mabl, Katalon), describe step by step how you would implement it.

A. 
To automate the navigation flow on the Eight25Media website, I would begin from the homepage and then move through the Work page before reaching the Contact form section.

First, I would launch the browser and open the main homepage at https://www.eight25media.com/. Once the page loads, I would verify that key elements, such as the top navigation bar, are visible. This ensures that the site has loaded properly and is ready for interaction.

Next, I would navigate to the Work page by clicking on the “Work” link in the top navigation menu. This action should open the Work section of the website, which showcases the company’s past projects and case studies. To confirm that the navigation was successful, I would check for the presence of expected elements like the page header or project tiles that typically appear on the Work page.

After verifying the Work page, I would proceed to access the Contact form, which is located on the homepage. To do this, I would return to the homepage: either by clicking on the company logo in the navigation bar or by navigating back directly using the base URL. Once back on the homepage, I would scroll down to locate the Contact form section.

At this point, the focus would shift to interacting with the form fields. I would fill in the form with sample test data as follows:

- Name: Test User
- Email: testuser@example.com
- Message: This is a test message

Each field would be filled carefully, and after entering the data, I would verify that the text entered in the fields matches the expected values. For example, I’d confirm that the “Name” field displays “Test User,” the “Email” field shows “testuser@example.com,” and the “Message” box contains “This is a test message.” This verification step ensures that all input fields are functioning correctly and accepting user input.

Since the purpose of this particular test is only to validate the data entry process, I would not proceed with form submission. Instead, I would end the test after confirming that the fields have been correctly filled and displayed as expected.

In summary, the test flow covers three key actions:

- Opening the homepage and ensuring it loads correctly.
- Navigating to the Work page and verifying its content.
- Returning to the homepage, filling in the Contact form with sample data, and confirming that all input fields hold the correct values.

This verifies that the main navigation and form input functionalities of the Eight25Media website are working as intended.

## Section 5
### Answer the following question in 4–6 sentences:
> Q. How do you think AI-based test automation will improve software testing in the next 3 years?

A. In the next three years, AI-based test automation will make software testing faster and smarter. It will be able to learn from past test results and predict where bugs are most likely to happen. This means testers can focus more on complex and creative testing instead of repetitive tasks. AI will also help in creating and updating test cases automatically when the code changes. Overall, it will improve accuracy, reduce testing time, and help release better-quality software more quickly.