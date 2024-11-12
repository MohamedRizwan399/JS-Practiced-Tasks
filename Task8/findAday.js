function getResults() {
    for (let currentYear = 2022; currentYear <= 2050; currentYear++) {
        let date = new Date(currentYear, 0, 1);
        if (date.getDay() == 3) { // value indicates week days like 0-sunday, 1-mon, etc.
            console.log("1st January is being a wed "+currentYear);

            let createList = document.createElement("li");
            createList.textContent = "1st January is being a wed "+currentYear.toString();
            document.getElementById("result").appendChild(createList);

        }
    }

}