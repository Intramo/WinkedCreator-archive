var draggedQuestionInList = null;

function draggedQuestionInList_handleDragStart(e) {
    draggedQuestionInList = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('dragElem');
}

function draggedQuestionInList_handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.classList.add('over');
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function draggedQuestionInList_handleDragEnter(e) {
}

function draggedQuestionInList_handleDragLeave(e) {
    this.classList.remove('over');
}

function draggedQuestionInList_handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (draggedQuestionInList != this) {
        this.parentNode.removeChild(draggedQuestionInList);
        var dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        var dropElem = this.previousSibling;
        draggedQuestionInList_addDnDHandlers(dropElem);

    }
    this.classList.remove('over');
    return false;
}

function draggedQuestionInList_handleDragEnd(e) {
    this.classList.remove('over');
    this.classList.remove('dragElem');
}

function draggedQuestionInList_addDnDHandlers(elem) {
    elem.addEventListener('dragstart', draggedQuestionInList_handleDragStart, false);
    elem.addEventListener('dragenter', draggedQuestionInList_handleDragEnter, false)
    elem.addEventListener('dragover', draggedQuestionInList_handleDragOver, false);
    elem.addEventListener('dragleave', draggedQuestionInList_handleDragLeave, false);
    elem.addEventListener('drop', draggedQuestionInList_handleDrop, false);
    elem.addEventListener('dragend', draggedQuestionInList_handleDragEnd, false);

}

var cols = document.querySelectorAll('#sidebar-list>*');
[].forEach.call(cols, draggedQuestionInList_addDnDHandlers);



/***********************************************************************/

class QuestionNormal{
    constructor(question, answer, answerA, answerB, answerC, answerD, answerAcorrect, answerBcorrect, answerCcorrect, answerDcorrect, duration){
        this.question = question;
        this.answer = answer;
        this.id = id;
    }
}