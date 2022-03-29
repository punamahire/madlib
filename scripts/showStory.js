export const showStory = (storyObj) => {
    let mainElement = document.querySelector(".mainContainer")
    mainElement.innerHTML = `<h3>Here's your story</h3>
                            <p>It had been a hard, ${storyObj.adjective} day on the ${storyObj.sillyword} trail. 
                                The cowboys drove a herd of ${storyObj.pluralnoun} across the dry plains, 
                                kicking up ${storyObj.noun} along the way as they looked for somewhere to bed down.
                            </p><br><br>
                            <button type="button" class="startoverBtn" id="startOverBtn">Start Over</button>
                            `
    return mainElement
}