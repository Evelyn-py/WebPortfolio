const submit_button = document.querySelector('form.Submission button')


function add_avater(name, comment) {
    const avatar_container = document.querySelector('div.AvatarCollection')
    let rand_index = Math.floor(Math.random() * 10)+1;
    let add_text = `<div class="AvatarCard"><img src="img/profile_icon/${rand_index}.png" alt="new profile"><p class="name">${name}</p><span class="AvatarThought">${comment}</span></div>`
       
    avatar_container.innerHTML += add_text

}


const nickname_input = document.querySelector('form.Submission input#name')
const comment_input = document.querySelector('form.Submission input#msg')
const form_submission = document.querySelector('form.Submission')

submit_button.addEventListener('click', (event_submit) => {
    console.log('submit is clicked')
    event_submit.preventDefault()
    let submitted_name = nickname_input.value
    if (submitted_name.length == 0){
        submitted_name = 'Anonymous'
    }
    let submitted_comment = comment_input.value
    if (submitted_comment.length == 0){
        submitted_comment = 'Da BEST!!'
    }
    add_avater(submitted_name, submitted_comment)
    form_submission.reset()
})