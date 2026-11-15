---
title: "Heart Harbor"
published: 2026-11-12
description: "A site I made for my freshman orientation course. You can talk, check in, and look back at how you’ve been feeling."
category: "Web Project"
tags: ["Course Project"]
lang: en
---

I first made Heart Harbor for a freshman orientation course and later put it in a repository you can run on your own computer. You can start a conversation, log how you feel, or pick up a support card.

![Heart Harbor homepage with chat and check-in links](/assets/projects/heart-harbor.webp)

## Choose how to talk

Sometimes all you want is to say something out loud. Other times it helps to sort it out or think about what to do next. Heart Harbor offers four modes: “Hear me out,” “Help me sort it out,” “Help me slow down,” and “Give me a next step.” The response style and suggested support cards change with the mode.

## Check-ins and mood history

You can log your mood, energy, and stress on their own. The mood history shows what you recorded over the previous 7 or 30 days, along with any notes you left.

## Run it locally

The basic site runs on Node.js 22 or later without third-party dependencies. Run `npm start` from the repository and open `http://localhost:3000`.

Chat uses local rules by default. An optional StructBERT Tiny model can run on the CPU and help with cases the rules do not recognize. The site falls back to rules if the model is unavailable or times out. If you configure an online model, messages go to that provider.

Check-ins and chats are stored on the computer running the site. You can delete the current chat, and site administrators can view saved chats. The tests cover check-in isolation, deletion, concurrent writes, and model failure.

[GitHub repository](https://github.com/Wch727/heart-harbor) · [User guide](https://github.com/Wch727/heart-harbor/blob/main/USER_GUIDE.md)
