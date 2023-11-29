export default function returnHowManyArguments(...theargs) {
	let total = 0;
	for (const arg of theargs){
		total += arg;
	}
	return total;
}
