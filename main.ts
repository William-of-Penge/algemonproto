namespace SpriteKind {
    export const Object = SpriteKind.create();
    export const OldMan = SpriteKind.create();
}
let left_car = img`
        . . . . . . . . . . . . . . . .
        . . . . . . 3 3 3 3 3 3 3 3 . .
        . . . . . 3 c 3 3 3 3 3 3 d 3 .
        . . . . 3 c c 3 3 3 3 3 3 d c 3
        . . d 3 d c c 3 d d d d d d c c
        . d 3 3 d c b a a a a a a a 3 c
        . 3 3 3 d b a a b b b a b b a 3
        . 3 3 3 3 3 a b b b b a b b b a
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a
        . 3 d d 3 a f a a a f a a a a a
        . d d 3 a a a f a a f a a a a a
        . a a a a a a a f f f a a a a a
        . a a a a f f f a a a a f f f f
        . . . a f f f f f a a f f f f f
        . . . . f f f f . . . . f f f .
        . . . . . . . . . . . . . . . .
        `

let player_frames = {
    "default": img`
        . . . . . . f f f . . . . . . .
        . . . . . f f f f f . . . . . .
        . . . . . e e e e e . . . . . .
        . . . . . e f e f e . . . . . .
        . . . . . e e e e e . . . . . .
        . . . . . . e e e . . . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . . . . . . . . . . . . . .
    `
}
// Game over when you reach the end of the
// neighborhood
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true, effects.confetti)
})


let movable = true

type ChatTree = {
    npc_says: string,
    options: { [key: string]: ChatTree } | null
    action?: string | null
    state?: string | null
};

let old_man_chat: ChatTree = {
    npc_says: 'What is your business here?',
    options: {
        "I am a mere busker": {
            npc_says: 'I hate music!',
            options: {
                "What, even Coldplay?": {
                    npc_says: "Oh, actually I like them.",
                    options: null,
                    action: 'end',
                    state: 'chilling'
                },
                "Me too.": {
                    npc_says: "How strange.",
                    options: null,
                    action: 'end',
                    state: 'chilling'
                }
            }
        },
        "Silence, fool!": {
            npc_says: "How rude! I demand a battle!",
            options: null,
            action: "battle",
            state: "chilling"
        }
    }
}

function chat(npc: NPC, chat_tree: ChatTree) {  
    npc.sprite.sayText(chat_tree.npc_says)
    pause(2000)
    if(chat_tree.options == null) {
        npc.sprite.sayText('')
        npc.state = chat_tree.state
        if(chat_tree.action == 'battle') {
            example_battle()
        }
        return
    }
    let options = Object.keys(chat_tree.options)
    switch(options.length) {
        case 2:
            story.showPlayerChoices(options[0], options[1])
            break
        case 3:
            story.showPlayerChoices(options[0], options[1], options[2])
            break
        case 4:
            story.showPlayerChoices(options[0], options[1], options[2], options[3])
            break
    }
    let option: string = story.getLastAnswer()
    chat(npc, chat_tree.options[option])
    npc.sprite.sayText('')
}

function conversation(npc: NPC, chat_trees: { [key: string]: ChatTree } ) {
    if (Object.keys(chat_trees).indexOf(npc.state) < 0) { return }
    disableMovement()
    chat(npc, chat_trees[npc.state])
    enableMovement()
}

// Score a point for delivering packages to houses
/*sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Object, function (sprite, otherSprite) {
    music.magicWand.play()
    sprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
// Lose a point for driving into a house
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(139, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    scene.cameraShake(2, 200)
    info.changeScoreBy(-1)
})*/

class NPC {
    sprite: Sprite
    state: string
    constructor(sprite: Sprite, state: string) {
        this.sprite = sprite
        this.state = state
    }
}

scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level`)

let car = sprites.create(player_frames['default'], SpriteKind.Player)
let old_man_pic = img`
    . . . . . 2 2 2 2 2 . . . . . .
    . . 2 2 2 2 2 2 2 2 . . . . . .
    . . . . e e e e e e . . . . . .
    . . . . e f e e f e . . . . . .
    . . . . e e e e e e . . . . . .
    . . . . e e f f e e . . . . . .
    . . . . . 2 2 2 2 . . . . . . .
    . . . . . 2 2 2 2 . . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . 2 2 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let oms = sprites.create(old_man_pic, SpriteKind.OldMan)
let old_man = new NPC(oms, 'initial')
let smap: { [key: number]: NPC } = {};
smap[SpriteKind.OldMan] = old_man

sprites.onOverlap(SpriteKind.Player, SpriteKind.OldMan, function (player, npc) {
    conversation(smap[npc.kind()], {'initial': old_man_chat})
})

tiles.placeOnRandomTile(car, myTiles.tile4)
function disableMovement() {
    controller.moveSprite(car, 0, 0)
}
function enableMovement() {
    controller.moveSprite(car)
}
enableMovement()
scene.cameraFollowSprite(car)

function example_battle() {
    scene.setBackgroundColor(6)
    tiles.setTilemap(tilemap`empty`)
    old_man.sprite.setScale(0)
    car.setScale(0)
    let player_algemon = sprites.create(img`00`, SpriteKind.Player)
    player_algemon.setPosition(20, 20)
    animation.runImageAnimation(player_algemon, assets.animation`bludog`, 200, true)
    let other_algemon = sprites.create(img`00`, SpriteKind.Player)
    other_algemon.setPosition(100, 10)
    animation.runImageAnimation(other_algemon, assets.animation`sundog`, 200, true)
    story.showPlayerChoices('A', 'B', 'C')
    switch(story.getLastAnswer()) {
        case "A":
        other_algemon.startEffect(effects.ashes)
        break;
        case "B":
        other_algemon.startEffect(effects.fire)
        break;
        case "C":
            other_algemon.startEffect(effects.starField)
        break;
    }
}

