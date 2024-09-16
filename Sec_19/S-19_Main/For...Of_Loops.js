const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visist reddit.com/r/${subreddits[i]}`)
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

