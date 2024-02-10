function getUserInfo() {
    let httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener("load", function () {
        let recievedInfo = this.responseText;
        let recievedInfoJson = JSON.parse(recievedInfo);
        console.log(recievedInfoJson);

        let ul = document.createElement("ul");

        recievedInfoJson.data.forEach(function (item) {
            let li = document.createElement("li");
            li.textContent = `NAME: ${item.first_name}, SURNAME: ${item.last_name},  E-MAIL: ${item.email}`;
            ul.appendChild(li);
        });

        document.getElementById("User-Info").appendChild(ul);
    });

    httpRequest.open("get", "https://reqres.in/api/users?page=2");
    httpRequest.send();
}

getUserInfo();
