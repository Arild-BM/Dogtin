// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="./images/badge-like.png">
                <img id="like" class="badge" src="./images/badge-like.png">
                <img id="like" class="badge" src="./images/badge-like.png">
                <img id="nope" class="badge" src="./images/badge-nope.png">
            </div>`
    }
}

export default Dog