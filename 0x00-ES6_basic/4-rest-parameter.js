export default function returnHowManyArguments(...TheArgs) {
	let total = 0;
	for (const arg of TheArgs){
		total += arg;
	}
	return total;
}
