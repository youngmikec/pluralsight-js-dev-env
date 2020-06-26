import './style.css';
import './bootstrap.min.css';
import {getUsers, deleteUser} from './Api/userApi';
import numeral from 'numeral';

getUsers().then(result =>{
    let usersBody = '';

    result.forEach(user =>{
        usersBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`;
    });
    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName("deleteUser");

	// Must use array.from to create a real array from a DOM collection
	// getElementsByClassname only returns an "array like" object
	Array.from(deleteLinks, (link) => {
		link.onclick = function (event) {
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
        };
    });
});


const courseValue = numeral(1000).format('NGN0,0.00');
console.log(`I would pay ${courseValue} for this awesome course`); //eslint-disable-line no-console
