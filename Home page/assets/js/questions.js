const questionsBtn = document.querySelectorAll(".questions-item");

questionsBtn.forEach(item => {
    const textBox = document.querySelectorAll(".questions-text--container");
    item.addEventListener('click', function (event) {
        let target = event.target;
        //tentei usar Operações ternarias mas ficaria muito feio o codigo
        if (target.id == 1) {
            //t1 = first textBox
            //i1 = first arrow icon
            let box = textBox.id = t1;
            let icon = document.querySelector("#i1");
            toggleClass(box, "display-none")
            toggleClass(icon, "rotate")
        }
        if (target.id == 2) {
            let box = textBox.id = t2;
            let icon = document.querySelector("#i2");
            toggleClass(box, "display-none")     
            toggleClass(icon, "rotate")
        }
        if (target.id == 3) {
            let box = textBox.id = t3;
            let icon = document.querySelector("#i3");
            toggleClass(box, "display-none")
            toggleClass(icon, "rotate")
        }
        if (target.id == 4) {
            let box = textBox.id = t4;
            let icon = document.querySelector("#i4");
            toggleClass(box, "display-none")
            toggleClass(icon, "rotate")
        }
    })
})

function toggleClass (element, id) {
    element.classList.toggle(id)
}