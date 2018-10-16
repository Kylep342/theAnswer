// function randomAI(match, p1, p2, p3, offset, string) {
// 	const nicknames = ['The Answer', 'Bubba Chuck', 'Jewelz', 'The Third Degree', 'Allen Iverson'];
// 	let choice = nicknames[Math.floor(Math.random() * nicknames.length)];
// 	return [p1, choice, p3].join('');
// }

let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
	element = elements[i];

	for (let j = 0; j < element.childNodes.length; j++) {
		let node = element.childNodes[j];

		if (node.nodeType === 3) {
			let text = node.nodeValue;
			let replacedText = text.replace(/(\W|^)(Artificial Intelligence|AI|A\.I\.)(\W|$)/gi, '$1Allen Iverson$3');

			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}
