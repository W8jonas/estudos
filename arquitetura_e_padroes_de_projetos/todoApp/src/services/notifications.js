import PushNotification, { Importance } from 'react-native-push-notification'

const pushNotificationConfigure = () => PushNotification.configure({

	// (required) Called when a remote is received or opened, or local notification is opened
	onNotification(notification) {
		console.log('NOTIFICATION:', notification)
		// process the notification
		// (required) Called when a remote is received or opened, or local notification is opened
	},

	// (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
	onAction(notification) {
		console.log('ACTION:', notification.action)
		console.log('NOTIFICATION:', notification)
		// process the action
	},

	permissions: {
		alert: true,
		badge: true,
		sound: true,
	},

	popInitialNotification: true,
	requestPermissions: true,
})

const pushNotificationCreateChannel = () => PushNotification.createChannel(
	{
		channelId: 'channelLearni', // (required)
		channelName: 'channelLearni', // (required)
		channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
		playSound: true, // (optional) default: true
		soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
		importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
		vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
	},
	// (optional) callback returns whether the channel was created, false means it already existed.
	(created) => console.log(`createChannel returned '${created}'`),
)

function createLocalPushNotification({
	id, title, message, ...extra
}) {
	console.log('notifi2', id)
	PushNotification.localNotification({
		channelId: 'channelLearni',
		playSound: true,
		color: '#7007DF',
		title,
		message,
		...extra,
	})
}

function createLocalPushNotificationSchedule({
	id, title, message, date, repeatType, ...extra
}) {
	console.log('notifi2', id)
	PushNotification.localNotificationSchedule({
		channelId: 'channelLearni',
		allowWhileIdle: true,
		id,
		title,
		message,
		date,
		repeatType,
		...extra,
	})
}

function deleteLocalPushNotification(id) {
	PushNotification.cancelLocalNotifications({ id })
}

function deleteAllLocalPushNotifications() {
	PushNotification.cancelAllLocalNotifications()
}

export {
	pushNotificationConfigure,
	pushNotificationCreateChannel,
	createLocalPushNotification,
	createLocalPushNotificationSchedule,
	deleteLocalPushNotification,
	deleteAllLocalPushNotifications,
}
