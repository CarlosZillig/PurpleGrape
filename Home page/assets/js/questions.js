const questionsBtn = document.querySelectorAll(".questions-content");

questionsBtn.forEach(item => {
    const textBox = document.querySelectorAll(".questions-text");
    item.addEventListener('click', function (event) {
        let target = event.target;
        if (target.id == 1) {
            let box = textBox.id = t1;
            box.classList.toggle("display-none")
            let icon = document.querySelector("#i1");
            icon.classList.toggle("rotate")
        }
        if (target.id == 2) {
            let box = textBox.id = t2;
            box.classList.toggle("display-none")
            let icon = document.querySelector("#i2");
            icon.classList.toggle("rotate")
        }
        if (target.id == 3) {
            let box = textBox.id = t3;
            box.classList.toggle("display-none")
            let icon = document.querySelector("#i3");
            icon.classList.toggle("rotate")
        }
    })
})