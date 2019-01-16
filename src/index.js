import _ from 'lodash';
import './style.css';
import icon from './my_icon.png';
import data from './data.xml'

function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['hello','webpack'],' ');
	element.classList.add('hello');
	
	var myIcon = new Image();
	myIcon.src = icon;
	element.appendChild(myIcon);
	
	console.log(data);
	return element;
}

document.body.appendChild(component());