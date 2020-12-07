
let HeadCount = 0;
let TailCount = 0;
while (HeadCount < 11 && TailCount < 11) {
	let flipCheck = Math.floor(Math.random() * 1000) % 2;
	if (flipCheck == 1) {
		HeadCount++;
	} else {
		TailCount++;
	}
}
console.log("Heads count: " + HeadCount + " " + "Tails count: " + TailCount);