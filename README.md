# Guide to Steam Bots
### Forked from [andrewda/node-steam-guide](https://github.com/andrewda/node-steam-guide)

[![Codacy][codacy-img]][codacy-url]

[![Creative Commons][cc-img]][cc-url]

A complete guide to building Steam bots using Node.js.



## Table of Contents

- [Chapter 1 - Basics](./Chapter%201%20-%20Basics)
  - [Chapter 1.1 - Introduction](./Chapter%201%20-%20Basics/Chapter%201.1%20-%20Introduction)
  - [Chapter 1.2 - Prerequisites](./Chapter%201%20-%20Basics/Chapter%201.2%20-%20Prerequisites)
  - [Chapter 1.3 - Starting to Code](./Chapter%201%20-%20Basics/Chapter%201.3%20-%20Starting%20to%20Code)
  - [Chapter 1.4 - TOTP](./Chapter%201%20-%20Basics/Chapter%201.4%20-%20TOTP)
  - [Chapter 1.5 - Errors](./Chapter%201%20-%20Basics/Chapter%201.5%20-%20Errors)
- [Chapter 2 - Trading](./Chapter%202%20-%20Trading)
  - [Chapter 2.1 - Prerequisites](./Chapter%202%20-%20Trading/Chapter%202.1%20-%20Prerequisites)
  - [Chapter 2.2 - Handling Trade Offers](./Chapter%202%20-%20Trading/Chapter%202.2%20-%20Handling%20Trade%20Offers)
  - [Chapter 2.3 - Sending Trade Offers](./Chapter%202%20-%20Trading/Chapter%202.3%20-%20Sending%20Trade%20Offers)
  - [Chapter 2.4 - Accepting Donations](./Chapter%202%20-%20Trading/Chapter%202.4%20-%20Accepting%20Donations)
- [Chapter 3 - User 
Interaction](./Chapter%203%20-%20User%20Interaction)
  - [Chapter 3.1 - Friend Requests](./Chapter%203%20-%20User%20Interaction/Chapter%203.1%20-%20Friend%20Requests)
  - [Chapter 3.2 - Chatting With Friends](./Chapter%203%20-%20User%20Interaction/Chapter%203.2%20-%20Chatting%20With%20Friends)
  - [Chapter 3.3 - Sending Friend Invites](./Chapter%203%20-%20User%20Interaction/Chapter%203.3%20-%20Sending%20Group%20Invites)
- [Chapter 4 - Basics of Web Development](./Chapter%204%20-%20Basics%20of%20Web%20Development)
  - [Chapter 4.1 - Prerequisites](./Chapter%204%20-%20Basics%20of%20Web%20Development/Chapter%204.1%20-%20Prerequisites)
  - [Chapter 4.2 - Base App](./Chapter%204%20-%20Basics%20of%20Web%20Development/Chapter%204.2%20-%20Base%20App)
  - [Chapter 4.3 - Templates](./Chapter%204%20-%20Basics%20of%20Web%20Development/Chapter%204.3%20-%20Templates)
  - [Chapter 4.4 - Databases](./Chapter%204%20-%20Basics%20of%20Web%20Development/Chapter%204.4%20-%20Databases)
  - [Chapter 4.5 - WebSockets](./Chapter%204%20-%20Basics%20of%20Web%20Development/Chapter%204.5%20-%20WebSockets)
- [Chapter 5 - Advanced Web Development](./Chapter%205%20-%20Advanced%20Web%20Development)
  - [Chapter 5.1 - Prerequisites](./Chapter%205%20-%20Advanced%20Web%20Development/Chapter%205.1%20-%20Prerequisites)
  - [Chapter 5.2 - Authentication](./Chapter%205%20-%20Advanced%20Web%20Development/Chapter%205.2%20-%20Authentication)
- [Chapter 6 - Connecting Sites and Bots](./Chapter%206%20-%20Connecting%20Sites%20and%20Bots)
  - [Chapter 6.1 - Prerequisites](./Chapter%206%20-%20Connecting%20Sites%20and%20Bots/Chapter%206.1%20-%20Prerequisites)
  - [Chapter 6.2 - Getting Started](./Chapter%206%20-%20Connecting%20Sites%20and%20Bots/Chapter%206.2%20-%20Getting%20Started)
  - [Chapter 6.3 - Beginning the Connection](./Chapter%206%20-%20Connecting%20Sites%20and%20Bots/Chapter%206.3%20-%20Beginning%20the%20Connection)
- [Chapter 7 - Updating the Handlebars Frontend](./Chapter%207%20-%20Updating%20the%20Handlebars%20Frontend)
  - [Chapter 7.1 - Simple Updates](./Chapter%207%20-%20Updating%20the%20Handlebars%20Frontend/Chapter%207.1%20-%20Simple%20Updates)

*(more chapters to come)*

## Inspiration

Many people in the [/r/SteamBot](https://reddit.com/r/SteamBot) and
[/r/SteamBotMarket](https://reddit.com/r/SteamBotMarket) communities have been
looking for a complete guide to building Node.js Steam bots, but there really
isn't a complete, up-to-date tutorial online anywhere. This guide is here to
help out anyone and everyone who wants to learn about creating Steam bots.

When I first started creating Steam bots in the early ages about 2 years ago,
it was fairly overwhelming. Trying to piece together different modules in order
to form a functioning bot was a real struggle – but I'm looking help save
new-comers the struggle of learning the new and modern Steam technologies.

Together, we'll learn how to make bots and connect them to websites in this
multi-chapter guide.

## Projects

In this course, you'll be making a number of mini-projects, which will all come
together to create the final website. Eventually we'll end up with a site which
can be used to make profit by selling and buying TF2 or CS:GO skins, similar to
http://cs.money/.

## Contributing

Please read the [contribution guidelines](/CONTRIBUTING.md) before creating
a Pull Request.



<!-- Badge URLs -->

[codacy-img]: https://img.shields.io/codacy/grade/5822ba91cc994725932f71ee6b926400.svg?style=flat-square
[codacy-url]: https://app.codacy.com/app/Steam-Bot-Basics/node-steam-guide/dashboard
[cc-img]:     https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-url]:     https://creativecommons.org/licenses/by/4.0/
