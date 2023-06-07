// funtion to get my input value

function getUserValue(){
    //u got the user input
    let todoValue = document.getElementById('user-task').value;
    console.log(todoValue);

    //clear user input after storing current value
    document.getElementById('user-task').value = '';


    //create element to display as list

    let listTag = document.createElement('li');
    console.log(listTag)
    let textNode = document.createTextNode(todoValue);
    console.log(textNode)
    listTag.appendChild(textNode);


    //adding delete a task logic

    let delSpan = document.createElement('span');
    let delImg = document.createElement('img');
    delImg.src = 'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png';
    delImg.classList.add('delet-icon-style');
    delSpan.appendChild(delImg);
    
    // add ur delete option to list
    listTag.appendChild(delSpan);

    //using event handler to remove task
    delSpan.onclick=function(){
        console.log(this);
        let parentList = this.parentElement;
        parentList.style.display="none";
    }

    //check if user input is empty show some error
    if(todoValue.trim() === ''){
        alert('Please enter some task name')
    }else{
         //now add in the target container
        let ulContainer = document.getElementById('task-container');
        ulContainer.appendChild(listTag);
    }
}



//innerHTML VS innerText vs createNode

// function getData() {
//     let todoValue = document.getElementById('user-btn');
//     console.log(todoValue.innerHTML); // get the all content including html
//     todoValue.innerText;//give the text alone
//     let newnode = document.createTextNode('ssqsqsq');
//     todoValue.appendChild(newnode);
//     console.log(todoValue.innerText);
// }