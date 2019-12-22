const SteamUser = require('steam-user');
const client = new SteamUser();
const config = require('./config.json');

const logOnOptions = {
  accountName: config.username,
  password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed(440);
});
