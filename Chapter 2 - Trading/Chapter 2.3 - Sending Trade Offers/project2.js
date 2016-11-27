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

	sendRandomItem();
});

manager.on('newOffer', (offer) => {
	if (offer.partner.getSteamID64() === 'your_trusted_account_id') {
		offer.accept((err, status) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Accepted offer. Status: ${status}.`)
			}
		});
	} else {
		offer.decline((err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Canceled offer from scammer.')
			}
		});
	}
});

function sendRandomItem() {
	const partner = 'partner_steam_id';
	const appid = 440;
	const contextid = 2;

	const offer = manager.createOffer(partner);

	manager.loadInventory(appid, contextid, true, (err, myInv) => {
		if (err) {
			console.log(err);
		} else {
			const myItem = myInv[Math.floor(Math.random() * myInv.length - 1)];
			offer.addMyItem(myItem);

			manager.loadUserInventory(partner, appid, contextid, true, (err, theirInv) => {
				if (err) {
					console.log(err);
				} else {
					const theirItem = theirInv[Math.floor(Math.random() * theirInv.length - 1)];
					offer.addTheirItem(theirItem);

					offer.setMessage(`Will you trade your ${theirItem.name} for my ${myItem.name}?`);
					offer.send((err, status) => {
						if (err) {
							console.log(err);
						} else {
							console.log(`Sent offer. Status: ${status}.`)
						}
					});
				}
			});
		}
	});
}
