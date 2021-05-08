// TODO: determine best methods for file structure and then implement drag n drop function's
const example2Left = document.querySelector('#example2-left')
const example2Right = document.querySelector('#example2-right')
const example3Left = document.querySelector('#example3-left')
const example3Right = document.querySelector('#example3-right')

new Sortable(example2Left, {
    group: 'shared', // set both lists to same group
    animation: 150,
    onEnd: function (/**Event*/evt) {
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
		evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
		evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
		evt.clone // the clone element
		evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        console.log(evt.newIndex)
    }
});

new Sortable(example2Right, {
    group: 'shared',
    animation: 150,
    onEnd: function (/**Event*/evt) {
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
		evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
		evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
		evt.clone // the clone element
		evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        console.log(evt.newIndex)
    }
});



new Sortable(example3Right, {
    group: 'shared',
    animation: 150,
    onEnd: function (/**Event*/evt) {
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
		evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
		evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
		evt.clone // the clone element
		evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        console.log(evt.newIndex)
    }
});

for (i = 1; i < 6; i++){
	if(document.querySelector('#column-id-3') !== null){
		document.querySelector('#column-id-3')
		new Sortable(example3Left, {
			group: 'shared',
			animation: 150,
			onEnd: function (/**Event*/evt) {
				var itemEl = evt.item;  // dragged HTMLElement
				evt.to;    // target list
				evt.from;  // previous list
				evt.oldIndex;  // element's old index within old parent
				evt.newIndex;  // element's new index within new parent
				evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
				evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
				evt.clone // the clone element
				evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
				console.log(evt.newIndex)
			}
		}
	)}
}


const cardsWrapper = document.querySelector('.cardsWrapper');
for (let i = 0; i < cardsWrapper.children.length; i++) {
  console.log(myElement.children[i].tagName);
}