const actionsButtonsList = document.getElementsByClassName('actions-btn');
const actionsButtons = Object.values(actionsButtonsList);

let currTask;
let currDesc;
let allTasks = [];
let timer = 8*60;
let stopWatch = 0;
let workStatus = "stop";
let t;


const updateButtons = function(action){
	actionsButtons.forEach(elem => {
        elem.classList.remove('hidden');
    });
    document.getElementById(action).classList.add('hidden');
}

const format = function(time){
    let hours =  Math.floor(time / 60);
    if(hours < 10 && hours >= 0){
        hours = "0" + hours;
    } else if(hours < 0){
        hours = "00";
    };
    
    let mins = time % 60;
    if (mins < 10 && mins >= 0) {
        mins = "0" + mins;
    } else if (mins < 0 ) {
        mins = "00";
    };
    
    
    let times = `<b>${hours}</b><span>:</span><b>${mins}</b>`;
    return times;
}

const timeStep = function(){
    timer--;
    stopWatch++;
    updateClock('timer');
    updateClock('stopWatch');
}

const updateClock = function(clock){
    let clocks;
    switch(clock) {
        case "timer":
            clocks = timer;
            break;
        case "stopWatch":
            clocks = stopWatch;
            break;
        default:
            break;
    }
    let times = format(clocks);
    document.getElementById("watch-" + clock).innerHTML = times;
}


updateClock('timer');


cancelName.addEventListener('click', event => {
    event.preventDefault();
    actionsButtons.forEach(elem => {
        elem.classList.add('hidden');
    });
    startButton.classList.remove('hidden');
})


const newDesc = function(){
    currDesc = descField.value;
    promptDesc.classList.add('hidden');
    descField.value = "";
    
    if(currDesc === undefined) currDesc = "";
    
    
    let task = {
        time: stopWatch,
        name: currTask,
        description: currDesc.replace('<script>', '').replace('</script>', '')
    }
    
    
    let prevId;
    
    allTasks.forEach((taskItem, index) => {
        if(taskItem.name === currTask) prevId = index;
    });
    
    
    if(prevId === undefined){
        allTasks.push(task);
    } else {
        allTasks[prevId].time += task.time;
        if (allTasks[prevId].description === ""){
            allTasks[prevId].description = task.description;
        } else {
            allTasks[prevId].description = allTasks[prevId].description + " | " + task.description;
        }
    }
    
    
    tasksList.innerHTML = "";
    allTasks.forEach(taskItem => {
        let stopWatchValue = format(taskItem.time);
    
        let currTaskMark = document.createElement("li");
        currTaskMark.classList.add('tasks-item');
        currTaskMark.innerHTML = `<h3 class="tasks-title">${taskItem.name}</h3><span class="tasks-watch">[ ${stopWatchValue} ]</span>`;

        if (taskItem.description !== ""){
            currTaskMark.innerHTML = currTaskMark.innerHTML + `<p class="tasks-desc">${taskItem.description}</p>`
        }
        tasksList.append(currTaskMark);
    });
    
    
        
    clearInterval(t);
    
    stopWatch = 0;
    updateClock("stopWatch");
}

promptNameForm.addEventListener('submit', ev => {
    ev.preventDefault();
    currTask = nameField.value;
    promptName.classList.add('hidden');
    nameField.value = "";

    if (currTask !== null && currTask !== "") {
        currTask = currTask.toUpperCase();
        taskName.textContent = currTask;
        t = setInterval( timeStep, 60000);
        return currTask;
    }
});


promptDescForm.addEventListener('submit', ev => {
    ev.preventDefault();
    newDesc();
});


const emptyDesc = function(){
    currDesc = "";
    newDesc();
}

const startTask = function(){
    if (workStatus === "stop") {
        
        promptName.classList.remove('hidden');
        nameField.focus();
        
    } else {
        t = setInterval( timeStep, 60000);
    }
    
}

const pauseTask = function(){
    clearInterval(t);
    workStatus = "pause";
}

const stopTask = function(){
    taskName.textContent = "TimWorker";
    workStatus = "stop";
    document.getElementById('pauseButton').classList.add('hidden');
    promptDesc.classList.remove('hidden');
    descField.focus();
    
}


taskListToggler.addEventListener('click', () => tasksSection.classList.toggle('hidden'));

actionsList.addEventListener('click', function(event){
   if(event.target.classList.contains('actions-btn')){
       updateButtons(event.target.id);
   }
    
    
    switch(event.target.id) {
        case "startButton":
            startTask();
            break;
        case "pauseButton":
            pauseTask();
            break;
        case "stopButton":
            stopTask();
            break;
        default:
            break;
    }
});

let modals = document.querySelectorAll('.modal');
let modalClosers = document.querySelectorAll('.modal-cancel');
modalClosers.forEach((closer)=>{
    closer.addEventListener('click', ()=>{
        modals.forEach(modal => modal.classList.add('hidden'));
    })
})