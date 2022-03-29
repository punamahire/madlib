import { showInputFields } from "./scripts/showInputFields.js"
import { showStory } from "./scripts/showStory.js"

console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){

		const madlib = {
			adjective: `${document.getElementById("adjective").value}`,
			sillyword: `${document.getElementById("sillyword").value}`,
			pluralnoun: `${document.getElementById("pluralnoun").value}`,
			noun: `${document.getElementById("noun").value}`
		}
		//set/save to sessionStorage
		setDataToStorage(madlib)
		
		//invoke renderStory
		renderStory()
	}
})

mainElement.addEventListener("click", event => {
	if (event.target.id.startsWith("startOver")) {

		showInputFields()

		renderInputs()
	}
})

const getDataFromStorage = (dataKey) => {
	//use JSON.parse()
	return JSON.parse(sessionStorage.getItem(dataKey))
	
}

const setDataToStorage = (dataObj) => {
	//use JSON.stringify()
	sessionStorage.setItem("madlib", JSON.stringify(dataObj));
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage('madlib')
	
	// show inputs fields
	showInputFields()
}

const renderStory = () => {
	//get from sessionStorage
	let storyData = getDataFromStorage("madlib")
	//show the story
	console.log(storyData);
	showStory(storyData)
	//show startOver button
	//startOver will invoke renderInputs()
}

renderInputs();
