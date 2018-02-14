This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Ticketing Demo

Specs:

### Objective

Build a simple ticketing system for users to submit questions/information to and be able to respond to
each other.
For simplicity, leave the entire system anonymous. Don’t require user authentication or anything in order
to submit a request. Just keep the system open so anyone can use it.

### Requirements

1. Create the front end with React and any other tools you feel the need to use
2. Use some kind of data store to store the tickets/replies. We don’t care which you choose to use.
3. Bonus: Unit Test the code if possible
4. Bonus: Use static type checking where possible

### Pages
1. The first page should be a ticket listing page. The user who comes to the website will see a listing of
   tickets with a ticket id, a topic, a last response time, and a status (resolved, open). The user should be
   able to submit a new ticket via a link/button from this page. Feel free to add any other pieces of
   information/features that you feel enhance this page.
2. The second page will be to create a new ticket. The fields that are required are (i) a topic (ii) a body of
   text (post content). If you feel there is something else that the ticket submission form should have please
   feel free to add it.
3. The third page will be to view tickets. You should be able to click a ticket from page #1 and view the
   ticket. You will see the topic, the last post time, the status, and all posts. From this page at the bottom
   there should be a way for users to submit additional comments and change the status of the ticket (e.g.
   mark it as Resolved). When a user submits a new comment it will simply append the comment to the
   existing page. No page reloads or refreshes etc.
