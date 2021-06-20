import { createStore } from "redux";

export const AppState = {
    articles: [],
    expand: false,
    currentArticle: {
        "title": "The Shiny Shoes",
        "content": [
            "That was another thing. They hated having to translate their work into dumbed-down metaphors for the shiny shoe set - the meddlesome lawyers, media scribblers, and potential corporate sponsors who came through wanting to understand without doing the hard work of paying attention. Oh, god. This was just one more reason that Francis Benoit was glad he was working here at the La Honda Research Center and not out there in some corporate start-up, because despite all the roll-up-your-shirtsleeves myths and stereotypes, when you got right down to it, working for a start-up meant he'd spend 80 percent of his time doing complete bullshit - chasing VC money, writing technical documentation, hiring people - and all of it involved dumbing down your work. And the meetings! To participate in that game would be a waste of god-given talent, it would be a crime against his very own nature. Francis Benoit could just see himself cooped up in some office park, suffocating on his own unvented thoughts, poisoning himself, just to prove something to the shiny shoe set.",
            "Then there was the time that photographer and his camera crew came out from New York to shoot an ad for a new line of casual clothing, Lo-Tech Workware. Some Italian conglomerate had built up sufficient internal consensus to approve its ad agency's recommendation: put unassuming clothes on semifamous titans of the American computer industry, take pictures, and print the pictures alongside the slogan High tech insiders wear Lo-Tech on the outside. The company hired the renowned Italian fashion photographer Adriano Paschetta, flew him out to San Francisco, and gave him first-class treatment for several days to primp his artistic temperament, then put him in an air-conditioned van for the trip down to Silicon Valley.",
            "The producer had received, by fax, very specific directions; they had found the turnoff for Old La Honda Road, passed over a little gangplank bridge, and ascended into an evergreen forest, where sword ferns straddled the one-lane road and neon velvet moss circled the tree trunks. But about 2 miles farther up the road, the asphalt became all cracked and broken so the wheels of their van started a drumbeat rump rump rump; then the canopy of forest overhanging the road began scraping the metal roof, and naturally they started thinking they'd missed a turnoff, this couldn't be it, no way, something was wrong here, this couldn't be the way to the world-renowned La Honda Research Center.",
            "Right about when their ears popped from the altitude, they caught up with this fat guy on a frail 50-cc pedal-scooter, which was whining and bleeding a trail of oil-tainted blue smoke into the air. A plastic grocery bag dangled from the elbow of one arm; a diminutive Styrofoam helmet adorned his head.",
            "There was no room to pass, and the fat guy wasn't about to pull his scooter over and lose all his momentum, so they had no choice but to roll along behind him for the next mile and stare at the pale smile of flesh between his shorts and shirt.",
            "When the scooter-borne fat guy pulled into the entrance of the research center, Paschetta wondered if maybe all this was a prank set up by the boys in New York. Coming from Manhattan, where power is expressed, above all, in the concrete and glass of huge buildings rocketing skyward, well, they just expected more than a converted high school. Two three-story, I-shaped buildings with sloped, Spanish tile roofs bordered a field of overgrown, trampled grass. The buildings were brick but resurfaced with a thin layer of terra cotta or adobe, which had provided a porous surface for ivy to climb on. The flower beds, which separated the lawn from the buildings, had black-berry bushes growing in them. Blackberries! Where the camera crew came from, the blackberry bush was considered an invasive weed, even in the heat of summer with berries popping up beside every thorn; yet here it was growing in the flower beds, trimmed into orderly 4-foot-high thickets. The fat guy, who without locking it had leaned his scooter up against a bike rack in the parking lot, waddled along a pathway for several steps, the landing of each foot initiating a jiggle that tremored up and across the surface of his body. He reached into his grocery bag, dug around with his fist, and came out with a double-stick fruit popsicle. The thought then occurred to Adriano Paschetta that the whole notion implied by this campaign was dangerous - it might be a terrible and grave mistake to turn our couture over to a gang of brainiacs who cared not a wit about appearances.",
            "They unpacked the van; it took all of them to move the gear indoors - lights, makeup kit, several camera bags, backdrops, and a rack of clothes to be worn by the titan, a man named Hank Menzinger, the executive director of the center. The crew had never seen Hank Menzinger - didn't even know what he looked like; and as far as they could tell, nobody involved with the advertising campaign had seen whether or not he looked good in the clothes. Nobody had even checked his size, for god's sake - the clothes might not fit! All they knew about Hank Menzinger was that he could be found in Room 211, which was supposed to be upstairs in back, down a long hall."
        ],
        "comments": [
            {
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
                "name": "Samandar",
                "date": "a few seconds ago"
            },
            {
                "avatar": "https://lh3.googleusercontent.com/a-/AOh14GiaHmfeqfn7yGZ9YI1c4F5WR5hGtLG-ZGfTUwG9=k-s48",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .",
                "name": "User132121",
                "date": "a few minutes ago"
            },
            {
                "avatar": "https://i.stack.imgur.com/shMee.jpg?s=32&g=1",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .",
                "name": "big Programmer",
                "date": "long time ago"
            },
            {
                "avatar": "https://i.stack.imgur.com/shMee.jpg?s=32&g=1",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .",
                "name": "Lorem Ipsum",
                "date": "long time ago"
            },
            {
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .",
                "avatar": "https://i.stack.imgur.com/shMee.jpg?s=32&g=1",
                "name": "Little Foo",
                "date": "long time ago"
            }
        ]
    }

}

const reducer = (state = AppState, action) => {
    switch (action.type) {
        case "DATA_LOAD": {
            const { data } = action;
            return { ...state, articles: data }
        }
        case "RENDER_CURRENT_ARTICLE": {
            const newArticle = state.articles.find(({ title }) => title === action.title);
            return {
                ...state,
                currentArticle: newArticle
            }
        }
        case "REVEAL_COMMENT": {
            let { boolean } = action;
            return {
                ...state,
                expand: boolean
            }
        }

        default:
            return state;
    }
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);