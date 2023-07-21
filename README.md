# breddit-ng

This is an example app, meant for testing skills of developer applying for work at Equaleyes. It was bootstrapped with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## The task

Months ago, while eating breadsticks at our offices, we had a brilliant idea for a website. **breddit**. A website similar to [reddit](https://reddit.com), but also *completely* different. It's a way for bread lovers like ourselves to share their best bread recipes, vote on them, and discuss why garlic bread is the best.
We quickly started a plan on how to make this project work. A huge goal of ours was to use trending technologies, so we spent months researching which frameworks to use. We landed on Angular, and even though our only frontend developer had only heard of it, we decided this was enough experience.
To minimize the costs, we decided to outsource the backend to some Indian company, while our frontend guy worked on the Angular part. After weeks of development, the backend was finished.. it was quick and cheap, but it has it's flaws.
Now, as we all know, frontend is *much* more complicated, so it was only about half way done at this point. Then, out of nowhere, our frontend guy's life completely changes - he starts a [keto diet](https://en.wikipedia.org/wiki/Ketogenic_diet)! This makes breddit against his religious beliefs, so he quits. We're left with a project half way done, but we already have our opening party planned!

That's where you come in. You're our only hope. Please, help us finish this project, and you'll be rewarded with a lifetime supply of breadsticks*.

The opening party is next week.

## Current state of the project

Currently, **breddit** has limited functionalities. You can see a list of posts, you can log in, and you can add posts. And that's pretty much it.

## What  needs to be added

### Persistance on login

As you will quickly realize, if you refresh the page while being logged in, you're suddenly not logged in anymore! You have to find a way for this not to happen, as it's very painful to use the app. 

Please keep the user logged for as long as the page is open. Refreshing it should keep the logged in!

### Viewing post content

One of our key feature is missing - we're not displaying any post content. We'd like to have a separate page, where we show the title, and the content. Nothing too complicated. The only problem is, that we don't have an endpoint where you could fetch a single post. Try to find a way to have a separate page for this.
It's perfectly acceptable if you redirect to the home page in cases where the post would no longer be available.

#### Adding and viewing comments

On this same page, we also want to show some comments, and obviously, view them. Please add an input field where users can add comments on this page, and show all the comments right below it.

To add a comment, you can use the endpoint `POST /posts/:postId/comment`, and send it data `{content: "Content of the comment"}`.
Additionally, you can fetch all the comments of a particular post by calling `GET /posts/:postId/comment`.

### Voting on posts

You can see the score of each post on the right, but you can't vote on it. Please, add some buttons to the post summary, where users can vote on posts. When a user clicks them, it should call one of the appropriate end points. Also make sure to add an indicator, if the user has already voted on a post.
The endpoints for this are `POST /posts/:postId/vote/up` and `POST /posts/:postId/vote/down`.
You will then see that in the response of each post, there is a `voted` property, which is set to `true` if the currently logged in user has upvoted this post, `false` if they have downvoted it or `undefined` if they haven't voted yet. Use this information to indicate this, so that user's know which posts they already voted on.

### Page titles

Our marketing specialist told us that we're missing SEO content. To satify his needs, could you just set an appropriate `<title>` on each page? Something like `[name of current page] - breaddit`.

### Additional fixes

If you find any other improvements, feel free to add them!

## Testing

We have a development version of the backend deployed, which you should use. It runs on Heroku, so the first request may take a while, but it should be running smoothly after that.

We also added a few secure test accounts, so you can login and test the app. Please, keep the account information private, as it is highly confidential.

| Username   | Password  |
| --------   | --------- |
| equaleyes5 | password5 |
| equaleyes6 | password6 |
| equaleyes7 | password7 |
| equaleyes8 | password8 |
| equaleyes9 | password9 |

## How to submit

Fork this repository, and finish the task. Once you’re done, add a person from which you received an assignment as a reporter, and let us know.

If you have any questions, use Google. Unless it's about the API. In that case, feel free to contact us.

##### Disclaimer

\* The breadsticks are a lie. Sorry.
