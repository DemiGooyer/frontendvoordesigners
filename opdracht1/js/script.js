// dragstart:Fired when the user starts dragging an element or text selection.

function dragstart_handler(event) {
    console.log("dragStart");
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dropEffect = "move";
    //The setData() method is used to add an item to the drag data
}

//dragover: Fired when an element or text selection is being dragged over a valid drop target

function dragover_handler(event) {
    event.preventDefault();
    //Note each handler calls preventDefault() to prevent additional event processing for this event (such as touch events or pointer events).
    event.dataTransfer.dropEffect = "move";
}

//drop: Fired when an element or text selection is dropped on a valid drop target.

function drop_handler(event) {
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM

    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));

}






//document.addEventListener(
//"drop",
//function(event){
//
//}
//)

//copy indicates that the data being dragged will be copied from its present location to the drop location.

//move indicates that the data being dragged will be moved

//link indicates that some form of relationship or connection will be created between the source and drop locations.



/* ---------------------------------draggable list 1-------------------------------------*/
//Smith, A.(2019). 9 Implementing Drag and Drop Sortable List, van https://www.youtube.com/watch?v=cZhCZGWuNX4


/*
var deLijst = true;

var

    dragStart = function (e) {
        var index = $(e - target).index();

        index += ""; // convert to string for IE

        try {
            e.dataTransfer
                .setData('text/plain', index);
        } catch (ex) {

            e.datatransfer
                .setData('text', index);

            deLijst = false;
        }

    }, // next var

    dropped = function (e) {
        cancel(e); // Je drop een item bovenop een andere item, met cancel cancel je de devault

        var oldIndex; // Waar gaat de oude list item naartoe

        if (deLijst) {
            oldIndex = e.dataTransfer.getData('text/plain');
        } else {
            oldIndex = e.dataTransfer.getData('text');
        }

        var
            target = $(e.target), // op welk item wordt het gedropt
            newIndex = target.index(), // Nieuwe index positie, waar je de item laat vallen
            dropped = $(this) // Drop target
            .parent() // The parent, de onordende list
            .children()
            .eq(oldIndex);

    dropped.remove();//Dat verwijdert de list item van zijn huidige positie

        if (newIndex < oldIndex){
            target.before(dropped);
        }
        else{
            target.after(dropped);
        } // Waar gaat de item dan heen, als je een list item dropt, dan komt die ervoor, anders er achter
    },

    cancel = function(e){
        if (e.preventDefault){
            e.prevent.Default();
        }

        if(e.stopPropagation){
            e.stopPropagation();
        }
        return false;
    },



forEach = Array.prototype.forEach;

var items = document.querySelectorAll('#items-list > li'); // Elke list item in mijn lijst

forEach.call(items, function (item) {
    $(item).prop('draggable', true);

    item.addEventListener('dragstart', dragstart, false);

    item.addEventListener('drop', dropped, false);

    item.addEventListener('dragenter', cancel, false); // laat de drag en drop werken

    item.addEventListener('dragover', cancel, false);

});
*/
