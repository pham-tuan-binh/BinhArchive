---
author: "Binh Pham"
title: "\"365 Days\" Photo Album"
date: "2022-09-25"
description: "Online Photo Exhibition"
tags: ["Svelte", "Photography"]
categories: ["365 Days"]
draft: false
cover:
    image: "/posts/365days/images/365days-banner.png" # image path/url
    alt: "365 Days" # alt text
    relative: true   # when using page bundles set this to true
    hidden: false
---

# What is "365 Days"?
If you are a old follower of mine, you will know that, apart from a developer, I'm also a photographer. 

{{<figure src="/images/photographer.PNG" >}}

But for a long time, I have stopped posting photos to focus on my beloved projects in IoT.

Therefore, to unleash all the photos I've taken over the last three years and in the upcoming period, I've created a photo album called **"365 Days"**.

{{<figure src="/images/365days-banner.png" >}}

# What is it and what is special about it?

In the beginning of this project, **“365 Days”** was simply a photo album on [Instagram]("https://www.instagram.com/365d_album/"), where I would post a photo every day.

{{<figure src="/images/instagram.PNG" >}}

However, as the artist behind this album is also a developer, he said to him self: **“Why not make this into a fun and cool coding project”**. And then **“365 Days”** Photo Album was born.

So what is it? You might ask.

> **“365 Days”** is an online experience, where you will discover the artistic works of **Binh Pham** in a carousel. 

> There will be a new photo uploaded everyday and each day is a different story, a different location, a different person. 

> Some day will just have a title, some will have an entire story for you to discover.

All of this is hosted on [a sub page of Binh’s Archive]("https://365days.binhph.am/").

# Where can I see "365 Days"?

{{<figure src="/images/platforms.PNG" title="Social platforms of \"365 Days\"" caption="Instagram (Left) and Web Exhibition (Right)">}}

Presently, you can check **"365 Days"** on **2** platforms: [Instagram]("https://www.instagram.com/365d_album/") and [Web Exhibition]("https://365days.binhph.am/").

I reccomend taking a look at the Instagram page before heading on to the Web Exhibition. You can find how to use the website there, as well as how to find an **easter egg** on the website.

{{<figure src="/images/website.PNG" title="Online Exhibition" caption="Only available on phones and small tablets.">}}
# How to make a website like "365 Days"?
If you are a developer already, you can check the [Github for this project](https://github.com/pham-tuan-binh/365days).
[![Github](images/github.png)](https://github.com/pham-tuan-binh/365days)
If you are not, I'll explain what you will need to learn before understanding the source code of **"365 Days"**. 

And remember, I will only show you the keywords and a few core components, not the whole explaination.
![Meme](https://memegenerator.net/img/instances/59570640.jpg#center)
## The components
Behind every project, there is some thing called a [tech stack]("https://heap.io/topics/what-is-a-tech-stack"). Basically, there will be a database, a frontend, a backend along with APIs framework.

In this project, I used a tech stack called **SINE**:
- The Frontend: [Svelte](https://svelte.dev/)
- The Backend: [NodeJS](https://nodejs.org/en/)
- The API: [ExpressJS](https://expressjs.com/)
- The Database: [Instagram](https://developers.facebook.com/docs/instagram/)

## The files structure
To understand the inner workings of **"365 Days"**, you will first need to know more about the files structure of the [source code](https://github.com/pham-tuan-binh/365days).

```
365days:
    |- docs: Static files for web page
    |- src: Svelte source
    |- server: NodeJS and ExpressJS functions
```
## Server-side Code
**The Server** has a function for retreiving photos from Instagram using their GraphQL API. Here is its implementation.

```
const axios = require("axios").default; // Axios is a library for making REST APIs call.

const fields = "permalink,media_type,media_url, caption, children{media_url}"; // The Instagram API Structure
const access_token =
  "";

// Make a request for a user with a given ID
exports.instaFetch = async function (after = "", limit = 20) {
  return await axios
    .get(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${access_token}&after=${after}&limit=${limit}`
    )
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
```

As you can see, per user request, the server has to make a request to Instagram. If we keep this approach, the average time for a request is **1 second**. Therefore, I implemented a caching middleware using a Key-Value storage.

```
const mcache = require("memory-cache"); // Memory Cache is a Key-Value Storage

// ExpressJS Middleware
exports.instaHandle = async function (req, res) {
  const cacheDuration = 43200;
  try {
    let key = "exp-" + req.url;
    let cachedData = mcache.get(key);
    if (cachedData) {
      return res.status(200).json(cachedData);
    } else {
      let data = await instaFetch(req.query.after, req.query.limit);
      mcache.put(key, data, cacheDuration * 1000);
      return res.status(200).json(data);
    }
  } catch {
    return res.status(500).json({ error: "Something went wrong." });
  }
};
```

The refresh time of these values are 12 hours, so users are almost always receiving the newest pictures. Using this caching approach, I reduced the average request time to **200 Milliseconds**, an 80% deduction.

Then it is served using **ExpressJS**

```
const express = require("express");

const { instaHandle } = require("./instaHandler");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(function (err, req, res, next) {
  if (!err) return next();
  return res.status(500).json({ error: "Something wrong happened" });
});

app.get("/feed", instaHandle);
```
## Facebook Developers Platform

If you truly understand the above section, one question will pop: **What is the access token and how to get it?**.

To get this access token, you need to get on the [Meta for Developers]("https://developers.facebook.com/docs/instagram/") and get yourself an account as well as a project. Through this, you can generate a token to use their GraphQL API.

{{<figure src="/images/meta.PNG" >}}
## Frontend Code

On **the frontend**, everything is stored using only one page. As the components mounts or the website renders, the website will call the aboved API using the below functions.

```
async function fetchInstagramFeed() {
		let url = `https://the365days.herokuapp.com/feed`;
		if (picturesPaging) {
			url = url + '?after=' + picturesPaging.cursors.after;
		}
		const res = await fetch(url);
		let picturesData = await res.json();
		pictures = picturesPaging ? pictures.concat(picturesData.data) : picturesData.data;
		picturesPaging = picturesData.paging;
		pictures = pictures.map((ele, index) => {
			ele.index = index;
			return ele;
		});
		console.log(pictures);
}

onMount(async () => {
		await fetchInstagramFeed();
		const medRes = await fetch(`https://the365days.herokuapp.com/user`);
		mediaCount = await medRes.json();
		mediaCount = mediaCount.media_count;
		console.log(mediaCount);
		console.log(pictures);
	});
```

And to implement the left-click/right-click and easter egg for the website, I used a counter. 

Also, the pictures are lazy-loaded, that means the website only get 20 pictures per request, so there is also a function to check if the website has loaded all pictures.

```
function hasLoadedAllPictures() {
		return pictures.length == mediaCount;
}

async function leftClickHandle() {
    if (currentState === 2) {
        if (currentPicture === 0) {
            currentState--;
        } else {
            currentPicture--;
        }
        return;
    }
    if (currentState === 0) {   
        specialCounter++;
        if (specialCounter === 5) {
            currentState = -1;
            randomPicture = Math.floor(Math.random() * (pictures.length - 1));
            await fetchRandomQuotes();
            return;
        }

        return;
    }
    if (currentState === -1) {
        return;
    }
    currentState--;
}

async function rightClickHandle() {
    if (currentState === 2) {
        if (!hasLoadedAllPictures()) {
            if (currentPicture >= pictures.length - 2) {
                await fetchInstagramFeed();
            }
        } else {
            if (currentPicture === pictures.length - 1) {
                currentState++;
                return;
            }
        }
        currentPicture++;
    } else if (currentState === 3) {
        currentState = 0;
        currentPicture = 0;
    } else if (currentState === -1) {
        specialCounter = 0;
        currentState = 0;
    } else {
        currentState++;
    }
}   
```

The rest is in the JSX or whatever equivalent of Svelt in the [source code](https://github.com/pham-tuan-binh/365days).

# Endnote

![Goodbye](images/endnote.PNG)

If you have any questions regarding this prohject, please contact me at **binhpham@binhph.am**

A funny thing about this project is that the total time I used to make it was **2 days**: **6 hours** for the coding and **the rest** for media and design... and I was drunk while I did it =)) 

So I guess I have to pay my gratitude to Nikka Whisky for this project.

Aside from the joke, please don't drink while you're working.