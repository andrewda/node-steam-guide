# Chapter 7.1 - Simple Updates

We'll be using our code from [Chapter 6.3](../../Chapter%206%20-%20Connecting%20Sites%20and%20Bots/Chapter%206.3%20-%20Beginning%20the%20Connection). Let's name it `project11`.

First we'll edit `./views/main.hbs`...

```html
<!-- main.hbs -->

<!DOCTYPE html>
<html>
	<head>
		<title>Steam Trades</title>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	</head>
	<body>
	{{#if user}}
		<div class="welcome-user">
			<h1>Welcome, <u>{{user.personaname}}</u> <img src="{{user.avatar}}"</h1>
		</div>
		<div class="user-credits">
			<h3>You have <u><b>{{#if user.credits}}{{user.credits}}{{else}}0{{/if}}</b> credits</u></h3>
		</div>
		<div class="options-main">
			<li><a class="deposit-main" href="/deposit"><b>Deposit</b></a> </li>
			<li><a class="withdraw-main" href="/withdraw"><b>Withdraw</b></a> </li>
		</div>
	<br>
		<div class="logout-main">
			<li><a class="logout-main" href="/logout">Logout</a> </li>
		</div>
	{{else}}
		<div class="login-main">
			<a class="login-main" href="/auth/steam">Login through <i class="fab fa-steam-square"></i></a>
		</div>
	{{/if}}

		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src="/socket.io/socket.io.js"></script>
		<script src="/main.js"></script>
	</body>

</html>
```
We added `Font-Awesome` support & made use of it. Also, many `div` containers have been created, and `class` tags added.
