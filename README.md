## Inspirations

- https://reddit.com
- https://quora.com
- https://stackoverflow.com

--------------------------------------------------------------------------------

## Pages

- [ ] Home
- [ ] Sign Up
- [ ] Sign In
- [ ] Sign Out
- [ ] Profile
- [ ] Questions
  - [ ] Question
- [ ] Answers
- [ ] Search
  - [ ] Category/Topic
  - [ ] Top Questions
  - [ ] Votes

--------------------------------------------------------------------------------

## APIs

| Method | End Point | Description
|--------|-----|-------------
| GET    | `/` | GET home page

### Users

| Method | End Point | Description
|--------|-----|-------------
| GET    | `/users` | GET List Users
| POST   | `/users` | CREATE user
| POST   | `/auth/`          | Auth 
| GET    | `/users/me`            | GET Profile Page
| DELETE | `/users/:id`           | DELETE account
| GET    | `/users/:userId/questions`       | GET my questions
| GET    | `/users/:userId/votes` | GET my voted answers

### Questions

| Method | End Point | Description
|--------|-----|-------------
| GET    | `/questions`     | GET all questions
| GET    | `/questions/:id` | GET specific question
| POST   | `/questions`     | POST specific question
| PUT    | `/questions/:id` | UPDATE specific question
| DELETE | `/questions/:id` | DELETE specific question

### Answers

| Method | End Point | Description
|--------|-----|-------------
| POST   | `/questions/:id/answers`           | POST answer to specific question
| PUT    | `/questions/:id/answers/:answerId` | UPDATE answer in specific question
| DELETE | `/questions/:id/answers/:answerId` | DELETE answer in specific question

### Votes

| Method | End Point | Description
|--------|-----|-------------
| POST   | `/questions/:id/vote` | UPVOTE specific question
| DELETE | `/questions/:id/vote` | UPVOTE specific question
| POST   | `/questions/:id/answers/:answerId/vote` | UPVOTE specific answer
| DELETE | `/questions/:id/answers/:answerId/downvote` | DOWNVOTE specific answer

### Top Questions

| Method | End Point | Description
|--------|-----|-------------
| GET   | `/top-questions` | GET questions orderlist based on votecount

--------------------------------------------------------------------------------

## Data Models

### User

```js

```

### Questions

```js

```

### Answers

```js

```

### Misc

```js

```