const formTag = document.querySelector("#form", [0]);
const btnClick = document.querySelector("#btn");
const ulList = document.querySelector("#ulList", [0]);
const handleChange = () => {
    const inputValue = formTag.value;
    if (inputValue !== "") {
        const listItem = document.createElement("li");
        const trash = document.createElement("i");
        listItem.classList.add("ms-3");
        trash.classList.add("fa-solid", "fa-trash", "ms-3", "mb-2");
        trash.addEventListener('click', (e) => {
            console.log(e.target.remove(listItem.remove("li")));
        })
        listItem.append(inputValue, trash);
        ulList.append(listItem);
        formTag.value = '';
    } else {
        //do Nothing
    }

}

btnClick.addEventListener("click", handleChange);