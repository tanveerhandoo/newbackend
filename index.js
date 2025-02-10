 require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const giithubdata = {
  "login": "tanveerhandoo",
  "id": 98691256,
  "node_id": "U_kgDOBeHouA",
  "avatar_url": "https://avatars.githubusercontent.com/u/98691256?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tanveerhandoo",
  "html_url": "https://github.com/tanveerhandoo",
  "followers_url": "https://api.github.com/users/tanveerhandoo/followers",
  "following_url": "https://api.github.com/users/tanveerhandoo/following{/other_user}",
  "gists_url": "https://api.github.com/users/tanveerhandoo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tanveerhandoo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tanveerhandoo/subscriptions",
  "organizations_url": "https://api.github.com/users/tanveerhandoo/orgs",
  "repos_url": "https://api.github.com/users/tanveerhandoo/repos",
  "events_url": "https://api.github.com/users/tanveerhandoo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tanveerhandoo/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-01-30T11:22:39Z",
  "updated_at": "2025-02-01T09:37:56Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ab',( req, res)=>{
    res.send('itsme')
})
app.get('/github',(req,res)=>{
  res.json(giithubdata)
})
app.get('/myurl',(req,res)=>{
    res.send('welcome to our page')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
