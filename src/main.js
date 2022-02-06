import App from './App.svelte';

export const app = new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'James Butler',
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Ehm, what?'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins, maybe?',
		// What do you want to learn in this workshop? 
		expectations: [
			'to know what you are talking about'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play chess', 
			'do skydiving', 
			'do my taxes'
		]
	}
});

export default app;