# 10_mini_javascript_project


1. Form Validation
Purpose: Ensures that all form inputs are properly validated before submission.
Features:
Validates that the user has entered values in the necessary fields.
Ensures the entered amount is a valid number greater than zero.
If the validation fails, an alert prompts the user to correct their input.
How it works: When the form is submitted, it checks if the expanseType, expensecategory, and amount fields are filled correctly. If valid, the form data is processed and added to the expense list. Otherwise, the user is prompted to fill in the missing or incorrect values.


2. Expense Tracker
Purpose: Allows users to track their expenses by adding new entries dynamically.
Features:
Displays a new entry with the expense type, category, and amount in a table format.
Each time the user submits the form with valid data, a new row is added to the expense list.
The form is reset after submission, allowing the user to quickly add multiple entries.
How it works: On form submission, the input data is processed, and a new table row is added to the existing list of expenses. This allows users to easily track their expenses in real-time.
