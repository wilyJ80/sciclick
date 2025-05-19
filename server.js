import { app } from './app.js';

const PORT = process.env.APP_PORT || 3099;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
