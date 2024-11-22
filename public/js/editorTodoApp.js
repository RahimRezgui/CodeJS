const taskInput=document.querySelector(".task-input input"),filters=document.querySelectorAll(".filters span"),clearAll=document.querySelector(".clear-btn"),taskBox=document.querySelector(".task-box");let editId,todos,isEditTask=!1;function showTodo(t){let s="";todos&&todos.forEach(((e,o)=>{let a="completed"==e.status?"checked":"";t!=e.status&&"all"!=t||(s+=`<li class="task toLiTask">\n                            <label for="${o}">\n                                <input class="todoCheckBox" onclick="updateStatus(this)" type="checkbox" id="${o}" ${a}>\n                                <p class="${a}">${e.name}</p>\n                            </label>\n                            <div class="settings">\n                                <i onclick="showMenu(this)" class="fa-solid fa-ellipsis-vertical"></i>\n                                <ul class="task-menu">\n                                    <li class="toLiTask" onclick='editTask(${o}, "${e.name}")'><i class="fa-solid fa-pen"></i>Edit</li>\n                                    <li class="toLiTask" onclick='deleteTask(${o}, "${t}")'><i class="fa-solid fa-trash"></i>Delete</li>\n                                </ul>\n                            </div>\n                        </li>`)})),taskBox.innerHTML=s||"<span>You don't have any task here</span>",taskBox.querySelectorAll(".task").length>0?clearAll.classList.remove("activeTodo"):clearAll.classList.add("activeTodo"),taskBox.offsetHeight>=300?taskBox.classList.add("overflow"):taskBox.classList.remove("overflow")}function showMenu(t){let s=t.parentElement.lastElementChild;s.classList.add("show"),document.addEventListener("click",(e=>{"I"==e.target.tagName&&e.target==t||s.classList.remove("show")}))}function updateStatus(t){let s=t.parentElement.lastElementChild;t.checked?(s.classList.add("checked"),todos[t.id].status="completed"):(s.classList.remove("checked"),todos[t.id].status="pending"),localStorage[thisFileId+"todo-list"]=JSON.stringify(todos)}function editTask(t,s){editId=t,isEditTask=!0,taskInput.value=s,taskInput.focus(),taskInput.classList.add("activeTodo")}function deleteTask(t,s){isEditTask=!1,todos.splice(t,1),localStorage[thisFileId+"todo-list"]=JSON.stringify(todos),showTodo(s)}function clearAllTodos(){isEditTask=!1,todos.splice(0,todos.length),localStorage[thisFileId+"todo-list"]=JSON.stringify(todos),showTodo()}todos=void 0===localStorage[thisFileId+"todo-list"]?{}:JSON.parse(localStorage[thisFileId+"todo-list"]),filters.forEach((t=>{t.addEventListener("click",(()=>{document.querySelector("span.activeTodo").classList.remove("activeTodo"),t.classList.add("activeTodo"),showTodo(t.id)}))})),showTodo("all"),taskInput.addEventListener("keyup",(t=>{let s=taskInput.value.trim();if("Enter"==t.key&&s){if(isEditTask)isEditTask=!1,todos[editId].name=s;else{todos=todos||[];let t={name:s,status:"pending"};todos.push(t)}taskInput.value="",localStorage[thisFileId+"todo-list"]=JSON.stringify(todos),showTodo(document.querySelector("span.activeTodo").id)}}));