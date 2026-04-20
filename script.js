//comment pop up

function add_comment(text) {
    const comment_container = document.querySelector('div#CommentMe');
    let rand_index = Math.floor(Math.random() * 3);
    let rand_delay = Math.floor(Math.random() * 8 + Math.random() * 2)
    const floating_design = ['floating1', 'floating2', 'floating3']
    comment_container.innerHTML += `<p class="floating-comment ${floating_design[rand_index]}" 
        style="animation-delay:${rand_delay}s">${text}</p>`
}

const comment_form = document.querySelector('form.Comment')
const comment_input = document.querySelector('input#Comment')

comment_form.addEventListener('submit', (event_submit) => {
    event_submit.preventDefault()
    submitted_text = comment_input.value
    add_comment(submitted_text);
    comment_form.reset()
});

// Resume choose

function AddClassResume(all_choices, all_contents, selection_element, choosen_choice, content_element, choosen_content) {
    const choices = document.querySelectorAll(all_choices)
    const contents = document.querySelectorAll(all_contents)
    const selected_choice = document.querySelector(selection_element)
    const selected_element = document.querySelector(content_element)

    //Remove all choices and visibility
    choices.forEach((choice) => {
        choice.classList.remove(choosen_choice)
    })

    contents.forEach((content) => {
        content.classList.remove(choosen_content)
    })

    // Add visibility to the single class

    selected_choice.classList.add(choosen_choice)
    selected_element.classList.add(choosen_content)

}

// Portfolio

const achivements = {
    'mindwave': {
        'title': 'IMU 2024 Digital Health Hackathon',
        'subtitle': '2nd runner-up: mindwave ',
        'desc': 'Mindwave connects individuals experiencing mental fatigue, providing a space to explore mindful practices and engage with a supportive community. Through shared experiences and guided reflection, users are empowered to navigate challenges with greater resilience and clarity.',
        'iframe_src': 'https://embed.figma.com/proto/HajQ0ER3gH9XHcQZt1XcAg/mind-wave?node-id=4-18&starting-point-node-id=4%3A18&embed-host=share'
    },

    'loanshark': {
        'title': '2024 Finance Payhack',
        'subtitle': 'loanshark',
        'desc': 'LoanShark helps automate PTPTN eligibility screening by leveraging spending behavior data from e-wallets and bank accounts. This reduces manual workload while improving accuracy in identifying qualified applicants. The app also supports seamless repayments through card linking and reminders, increasing repayment rates and easing administrative processes.',
        'iframe_src': 'https://embed.figma.com/proto/pqAGx6jZt3fE62qDFQrmko/Loan-Shark?node-id=1-4&starting-point-node-id=18%3A348&embed-host=share'
    }
}


const ikea_obj = `
    <p><i>Higher discounts do not associate with high profit margin.</i> Other factors such as demands and sales of each category across the countries should be considered.</p>

    <p><i>Same Day shipping is the most frequently used option</i> despite higher associated tax costs, suggesting customers prioritize speed over cost. </br>
    This indicates an opportunity to optimize pricing for premium shipping tiers.</p>


    <p><i>Kitchen category shows highest return rate (~25%)</i>, with returns concentrated in Canada and Spain, indicating a potential issue in product handling, logistics, or regional demand mismatch.</br> 
    Further investigation is required to determine whether returns are driven by logistics, product quality, or customer expectations.</p>

    <p><i>Furniture generates the highest return sales ($648k)</i> and is associated with lower average ratings and higher discounts levels, suggesting potential issues in pricing strategy, product quality or product satisfaction.</br>
    This category may require review of discount policies and product quality to reduce returns and improve profitablity.</p>

`
const projects = {
    'powerbi': {
        'title': 'Power BI Dashboard',
        'subtitle': 'Ikeas 2024 KPI',
        'desc': ikea_obj,
        'iframe_src': 'https://app.powerbi.com/view?r=eyJrIjoiZjFhYWVjYTAtZjUyYi00NGY0LTlmMmItNzU5MGE2YTU0MjQyIiwidCI6ImNmYWMwNWYyLWNlNjMtNDFiMC04NDM1LWFlNDA2NWZhNmNiZSIsImMiOjEwfQ%3D%3D'
    },

    'python-voice': {
        'title': 'YouTube Voice-Control Automatation',
        'subtitle': 'Python - 2024: SpeechRecognition (sound_to_text), NPL, pyautogui',
        'desc': 'Controlled video playback using speech recognition and Python automation',
        'link_to': 'https://github.com/Evelyn-py/Sound-ctrl-youtube.git'
    },

    'python-proxy': {
        'title': 'Proxy Testing System',
        'subtitle': 'Python - 2021: reddis, asyncio',
        'desc': 'Establishing a system that test the proxy, and assign score to the useable function. Each weightage of the proxy will change according to the test and those with higher weightage will prior to be choose.',
        'link_to': 'https://github.com/Evelyn-py/Proxy-Testing-System.git'
    },


    'python-rent': {
        'title': 'Scraping Rental Information',
        'subtitle': 'Python - 2024:PyQuery, selenium, pandas, re',
        'desc': 'Scraping rental information and store into mysql, creating a xslx using pandas.',
        'link_to': 'https://github.com/Evelyn-py/Ayncio-Rental-Scraping.git'
    }
}

// Portfolio h2 title
function change_text(target_element, text) {
    const selected_element = document.querySelector(target_element)
    selected_element.innerText = text
}

//Portfolio Nav
const nav_achievement = document.querySelector('section.Portfolio ul.PortfolioNav li:first-child')
const nav_projects = document.querySelector('section.Portfolio ul.PortfolioNav li:last-child')

nav_achievement.addEventListener('click', () => {
    console.log('Achievement is clicked')
    let achievement_key = achievements_keys[achivements_index]
    const achivement_json = achivements[achievement_key]

    iframe_vs_linkto(achivement_json)
})

nav_projects.addEventListener('click', () => {
    console.log('Projects is clicked')
    let projects_key = projects_keys[projects_index]
    let projects_json = projects[projects_key]

    iframe_vs_linkto(projects_json)
})

// Portfolio arrow 

const achievements_keys = ['mindwave', 'loanshark']
const projects_keys = ['powerbi', 'python-voice', 'python-proxy', 'python-rent']

const div_achievement = document.querySelector('section.Portfolio div.SubContainer.Achievement')
const div_projects = document.querySelector('section.Portfolio div.SubContainer.Projects')

var achivements_index = 0
var projects_index = 0

function add_class(element_query, added_class) {
    const selected_element = document.querySelector(element_query)
    selected_element.classList.add(added_class)
}

function rmv_class(element_query, rmv_class) {
    const selected_element = document.querySelector(element_query)
    selected_element.classList.remove(rmv_class)
}

const img_iframe = document.querySelector('section.Portfolio div.ImgBox iframe')
const img_a = document.querySelector('section.Portfolio div.ImgBox a.button-to-project')

function iframe_vs_linkto(selected_json) {
    let selects_iframe = selected_json.iframe_src
    if (typeof selects_iframe != 'undefined') {
        console.log('iframe src: ' + selected_json.iframe_src)
        img_iframe.classList.add('Visible')
        img_a.classList.remove('Visible')

        img_iframe.src = selected_json.iframe_src
    } else {
        console.log('link to project: ' + selected_json.link_to)
        img_iframe.classList.remove('Visible')
        img_a.classList.add('Visible')

        img_a.setAttribute('href', selected_json.link_to)
    }
}


function next_arrow() {
    var portfolio_title = document.querySelector('h2#PortfolioTitle').textContent

    let all_desc_box = document.querySelector(`section.Portfolio div.${portfolio_title} div.Description`)
    let all_title = document.querySelector(`section.Portfolio div.${portfolio_title} .title`)
    let all_subtitle = document.querySelector(`section.Portfolio div.${portfolio_title} .project-name`)
    let all__desc = document.querySelector(`section.Portfolio div.${portfolio_title} .project-description`)

    console.log('next arrow is clicked')

    all_desc_box.classList.remove('fromRight')
    all_desc_box.classList.add('fromLeft')


    all_desc_box.addEventListener('animationend', () => {
        all_desc_box.classList.remove('fromLeft')
    })

    if (portfolio_title == 'Achievement') {
        console.log('porfotlio title: ' + portfolio_title)

        div_achievement.classList.add('Visible')
        div_projects.classList.remove('Visible')

        achivements_index++
        if (achivements_index > achievements_keys.length-1) {
            achivements_index = 0

        }

        let achievement_key = achievements_keys[achivements_index]
        const achivement_json = achivements[achievement_key]

        all_title.textContent = achivement_json.title
        all_subtitle.textContent = achivement_json.subtitle
        all__desc.textContent = achivement_json.desc
        iframe_vs_linkto(achivement_json)

    } else {
        console.log('porfotlio title: ' + portfolio_title)
        div_achievement.classList.remove('Visible')
        div_projects.classList.add('Visible')

        projects_index++
        if (projects_index > projects_keys.length-1) {
            projects_index = 0

        }

        console.log('project index: ' + projects_index)

        let projects_key = projects_keys[projects_index]
        let projects_json = projects[projects_key]

        all_title.textContent = projects_json.title
        all_subtitle.textContent = projects_json.subtitle
        all__desc.innerHTML = projects_json.desc
        iframe_vs_linkto(projects_json)
    }
}


function back_arrow() {
    var portfolio_title = document.querySelector('h2#PortfolioTitle').textContent

    let all_desc_box = document.querySelector(`section.Portfolio div.${portfolio_title} div.Description`)
    let all_title = document.querySelector(`section.Portfolio div.${portfolio_title} .title`)
    let all_subtitle = document.querySelector(`section.Portfolio div.${portfolio_title} .project-name`)
    let all__desc = document.querySelector(`section.Portfolio div.${portfolio_title} .project-description`)

    console.log('back arrow is clicked')

    all_desc_box.classList.remove('fromLeft')
    all_desc_box.classList.add('fromRight')


    all_desc_box.addEventListener('animationend', () => {
        all_desc_box.classList.remove('fromRight')
    })

    if (portfolio_title == 'Achievement') {
        console.log('porfotlio title: ' + portfolio_title)

        div_achievement.classList.add('Visible')
        div_projects.classList.remove('Visible')

        achivements_index --
        if (achivements_index < 0) {
            achivements_index = achievements_keys.length - 1

        }

        let achievement_key = achievements_keys[achivements_index]
        console.log('achivement key: ' + achievement_key)
        const achivement_json = achivements[achievement_key]

        all_title.textContent = achivement_json.title
        all_subtitle.textContent = achivement_json.subtitle
        all__desc.textContent = achivement_json.desc
        iframe_vs_linkto(achivement_json)
    } else {
        console.log('porfotlio title: ' + portfolio_title)
        div_achievement.classList.remove('Visible')
        div_projects.classList.add('Visible')

        projects_index --
        if (projects_index < 0) {
            projects_index = projects_keys.length - 1

        }

        let projects_key = projects_keys[projects_index]
        let projects_json = projects[projects_key]

        all_title.textContent = projects_json.title
        all_subtitle.textContent = projects_json.subtitle
        all__desc.innerHTML = projects_json.desc
        iframe_vs_linkto(projects_json)
    }
}

