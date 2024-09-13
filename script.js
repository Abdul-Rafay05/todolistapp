const User_input = document.getElementById("User_input");
const Search_btn = document.getElementById("Search_btn");
const list_container = document.getElementById("list_container");
Search_btn.addEventListener("click", () => {
    if (User_input.value.length === 0) {
        alert("You Must write Anything...");
    } else {
        // console.log("je");
        let li = document.createElement("li");
        li.innerHTML = User_input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }
    User_input.value = null;
    SaveData();
});
list_container.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("task_complete");
            SaveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            SaveData();
        }
    },
    false
);

function SaveData() {
    localStorage.setItem("data", list_container.innerHTML);
}

function ShowTask() {
    list_container.innerHTML = localStorage.getItem("data");
    //   localStorage.setItem("data", list_container.innerHTML);s
}
ShowTask();
س;