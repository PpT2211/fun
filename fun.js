function secretSanta() {
    let names = ['Trisha', 'Tarun', 'Sushi', 'Ouie', 'Tithoe', 'Ditcher', 'Bhavitha', 'Ppt'];
    let santa = ['Trisha', 'Tarun', 'Sushi', 'Ouie', 'Tithoe', 'Ditcher', 'Bhavitha', 'Ppt'];
    let list = document.getElementById("lst")
    for (let i = 0; i < santa.length; i++) {
        let final = document.createElement('li');
        let cmd = true;
        while (cmd) {
            var ind = Math.floor(Math.random() * names.length);
            var result = names[ind];
            if (names[ind] != santa[i]) {
                final.innerHTML = `${santa[i]} - ${result}<br><br>`;
                cmd = false;
            } else {
                ind = (Math.random() * names.length);
                result = names[ind];
            }
        }
        names.splice(ind, 1);
        list.append(final);
    }
}