## Inspirations

- https://reddit.com
- https://quora.com
- https://stackoverflow.com

--------------------------------------------------------------------------------

## Pages

- [X] Home
- [X] Sign Up
- [X] Sign In
- [ ] Sign Out
- [X] Profile
- [X] Questions
  - [X] Question
- [X] Answers
- [ ] Search
  - [ ] Category/Topic
  - [ ] Top Questions
  - [ ] Votes

--------------------------------------------------------------------------------

## APIs

| Method | End Point | Description
|--------|-----|-------------
| GET    | `/` | GET home page
| POST   | `/auth/signup`          | Auth SignUp 
| POST   | `/auth/login`          | Auth SignIn
### Users

| Method | End Point | Description
|--------|-----|-------------
| GET    | `api/users` | GET List Users 
| GET    | `api/users/:uID`            | GET Profile Page

### Questions

| Method | End Point | Description
|--------|-----|-------------
| GET    | `api/questions`     | GET all questions
| GET    | `api/questions/:qID` | GET specific question
| POST   | `api/questions`     | POST specific question
| PUT    | `api/questions/:qID` | UPDATE specific question
| DELETE | `api/questions/:qID` | DELETE specific question

### Answers

| Method | End Point | Description
|--------|-----|-------------
| POST   | `api/questions/:qID/answers`           | POST answer to specific question
| PUT    | `api/questions/:qID/answers/:aID` | UPDATE answer in specific question
| DELETE | `api/questions/:qID/answers/:aID` | DELETE answer in specific question

### Votes Question/Answer

| Method | End Point | Description
|--------|-----|-------------
| POST   | `api/questions/:qID/vote` | UPVOTE specific question
| POST | `api/questions/:qID/vote` | UPVOTE specific question
| POST   | `api/questions/:qID/answers/:answerId/vote` | UPVOTE specific answer
| POST | `api/questions/:qID/answers/:answerId/downvote` | DOWNVOTE specific answer

### Top Questions

| Method | End Point | Description
|--------|-----|-------------
| GET   | `api/questions/top-questions` | GET questions orderlist based on votecount

--------------------------------------------------------------------------------

## Data Models

### User

```js
{
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String,
}
```

### Questions

```js
{
	title: String,
	by: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	topics: [{text: String}],
	votes: {
		type: Number, 
		default:0
	},
	answers: []
}, { timestamps: true }
```

### Answers

```js
{
	content: String,
	by: {
					type: mongoose.Schema.ObjectId,
					ref: 'User'
				},
				votes: {type: Number, default:0},
				createdAt: { type: Date, default: Date.now },
				updatedAt: { type: Date, default: Date.now }
  			
}
```
