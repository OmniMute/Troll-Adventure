var fightTroll = prompt("You're walking along a path. A large troll intercepts you and wants to fight.\
Do you FIGHT, RUN, or PAY?").toUpperCase();

switch(fightTroll) {
    case 'FIGHT':
        var strong = prompt("Do you have physical strength? Y or N?").toUpperCase();
        var smart = prompt("Are you quick-witted? Y or N?").toUpperCase();
        
        if (strong === 'Y' || smart === 'Y') {
            console.log("Well, you only needed one. You won the fight.");
        } else {
            console.log("Well, it's clear you aren't sturdy or clever, else you wouldn't have tried to fight a troll. You die.");};
        break;
    case 'RUN':
        var fast = prompt("Are you fast? Y or N?").toUpperCase();
        var believe = prompt("Do you believe in the heart of the cards? ;)").toUpperCase();
        
        if (fast === 'Y' && believe === 'Y') {
            console.log("Great! Trolls aren't very fast, so you got away. Didn't get across the bridge though.");
        } else {
            console.log("Well why'd you run, then? Trolls aren't fast either, but it looks like this one caught you. You're dead.");};
        break;
    case 'PAY':
        var money = prompt("Do you actually have money? Y or N?").toUpperCase();
        if (money === 'Y') {
            console.log("Great, the troll takes it all. It says you can pass though.");
        } else {
            console.log("That's a shame. The trolls thinks so too. You're dead.");};
        break;
    default:
        console.log("Sorry, that's not an option. The troll seems to be getting impatient...");
}
