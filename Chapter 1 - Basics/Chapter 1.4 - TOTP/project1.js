const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

const client = new SteamUser();

const logOnOptions = {
	accountName: 'your_steam_username',
	password: 'your_steam_password',
	twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('Logged into Steam');

	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	client.gamesPlayed(440);
});
