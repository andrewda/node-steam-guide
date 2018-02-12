# Chapter 1.5 - Errors

Errors are an inevitable part of programming. You will face them. And it will
suck. I speak from experience – it really does suck to get errors after working
day and night on some beautiful code. Luckily, though, we not only have the
entire internet at our disposal to search for people who have faced similar
issues, but also a handy quick cheatsheet right here.

If you receive random Steam issues, checkout the huge list of Steam error codes
at [steamerrors.com](https://steamerrors.com).

### "Cannot find module: THE_MODULE_NAME"

If you get this error, you have most likely installed the given module
incorrectly. Try reinstalling it by typing `npm install THE_MODULE_NAME` again.

### "Error: InvalidPassword"

This means you have likely specified an incorrect `accountName` or `password`.
Try re-entering them and make sure they work when logging into the Steam
client. 
This error can also be caused by passing the `twoFactorCode` in the logOnOptions object, while your bot does not currently have Two Factor Authentication (2FA) enabled.
