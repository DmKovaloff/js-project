const list = document.getElementById('main');


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            const cell = document.createElement('div');
            cell.classList.add('userCell')

            let h2 = document.createElement('h2');
            h2.innerText = `${user.name}`

            let userId = document.createElement('p');
            userId.innerText = `${user.id}`

            let detailUserButton = document.createElement('button');
            detailUserButton.innerText = `Details`;
            detailUserButton.classList.add('detailUserButton');
            detailUserButton.onclick = function (){
                localStorage.setItem('user', JSON.stringify(user));
                console.log(user);
                location.href = 'user-details.html';
                console.log(user);
            }
            cell.append(h2, userId, detailUserButton);
            list.appendChild(cell);
        }
    });
