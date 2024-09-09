const userDetails = document.getElementById('userDetails');
const personalData = document.getElementById('personalData');
const address = document.getElementById('address');
const company = document.getElementById('company');


let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

let userId = user.id;
console.log(userId);

personalData.innerText = `
        Personal Data:
        Name: ${user.name};
        username: ${user.username};
        email: ${user.email};
        user ID: ${user.id};
        phone: ${user.phone};
        website: ${user.website};
        `
address.innerText = `
        Address:
        city: ${user.address.city};
        street: ${user.address.street};
        suite: ${user.address.suite};
        zipcode: ${user.address.zipcode};
        geo:
        lat ${user.address.geo.lat},
        lng ${user.address.geo.lng};
        `
company.innerText = `
        Company:
        Name: "${user.company.name}";
        Catch Phrase: "${user.company.catchPhrase}"
        bs: "${user.company.bs}"
        `

let postsButton = document.getElementById('buttonAllUserPosts');
let postsContainer = document.getElementById('postsContainer');

postsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(response => response.json())
        .then(value => {
                let posts = value;
                for (const post of posts) {
                    let postDiv = document.createElement('div');
                    let titlePost = document.createElement('p');
                    titlePost.innerText = `${post.title}`;
                    let postDetailsButton = document.createElement('button')
                    postDetailsButton.innerText = 'Details';
                    postDetailsButton.onclick = function (){
                        localStorage.setItem('post', JSON.stringify(post));
                        console.log(post.id);
                        location.href = 'post-details.html';
                        console.log(post);
                    }
                    postDiv.append(titlePost, postDetailsButton);
                    postsContainer.appendChild(postDiv);
                }
            })
        }
