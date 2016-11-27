const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');

const client = new SteamUser();
const community = new SteamCommunity();
const manager = new TradeOfferManager({
	steam: client,
	community: community,
	language: 'en'
});

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

client.on('webSession', (sessionid, cookies) => {
	manager.setCookies(cookies);

	community.setCookies(cookies);
	community.startConfirmationChecker(10000, 'your_identity_secret');
});

manager.on('newOffer', (offer) => {
	if (offer.itemsToGive.length === 0) {
		offer.accept((err, status) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Donation accepted. Status: ${status}.`)
			}
		});
	} else {
		offer.decline((err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Donation declined (wanted our items).')
			}
		});
	}
});
