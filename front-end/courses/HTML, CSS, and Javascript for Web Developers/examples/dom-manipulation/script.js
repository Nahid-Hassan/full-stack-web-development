function sayHello() {
    this.textContent = 'Said It';
    var name = document.getElementById('name').value;
    var message = "<h1>Hello " + name + "!</h1>";

    // document.getElementById('content').textContent = message;
    document.getElementById('content').innerHTML = message;

    if (name === "student") {
        var title = document.querySelector('#title').textContent
        title += 'Love it!'
        document.querySelector("#title").textContent = title;
    }
}

// document.querySelector('button').addEventListener('click', sayHello);
document.querySelector('button').onclick = sayHello;
