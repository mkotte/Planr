// TODO: determine best methods for file structure and then implement drag n drop function's

// Simple list
Sortable.create(simpleList, { //Options go here
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
    }});

// List with handle
Sortable.create(listWithHandle, {
  handle: '.glyphicon-move',
  animation: 150
});

