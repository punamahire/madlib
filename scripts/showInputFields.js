export const showInputFields = () => {

    let mainElement = document.querySelector(".mainContainer")
    mainElement.innerHTML = `<form action="" class="inputForm">
                              <div class="formDiv">
								<label>Adjective</label>
								<input type="text" class="inputFieldOne" id="adjective"><br><br>
								<label>Sillyword<label>
								<input type="text" class="inputFieldTwo" id="sillyword"><br><br>
								<label>Plural Noun</label>
								<input type="text" class="inputFieldThree" id="pluralnoun"><br><br>
								<label>Noun</label>
								<input type="text" class="inputFieldFour" id="noun"><br><br>
								<button type="button" class="tellstoryBtn" id="tellStoryBtn">Tell Story</button>
                              </div>
							</form>`
    return mainElement
}