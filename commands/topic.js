const { knownHookEvents } = require("got/dist/source");

module.exports = {
    name: 'topic',
    aliases: ["tpc"],
    description: "~~Bruh Momment~~, more like Tom Momment",
    cooldown: 5,
    execute(message,args, cmd, client, Discord){
        
        const topic_list = [
            'What weird food combinations do you really enjoy?',
            'What food have you never eaten but would really like to try?',
            'What would a world populated by clones of you be like?',
            'Do you think that aliens exist? why? or why not?',
            'What movie can you watch over and over without ever getting tired of?',
            'If you could switch two movie characters, what switch would lead to the most inappropriate movies?',
            'What animal would be cutest if scaled down to the size of a cat?',
            'What’s wrong but sounds right?',
            'What’s the most epic way you’ve seen someone quit or be fired?',
            'What’s the best / worst practical joke that you’ve played on someone or that was played on you?',
            'What food is delicious but a pain to eat?',
            'What “old person” things do you do?',
            'What is the most amazing slow motion video you’ve seen?',
            'What’s the most expensive thing you’ve broken?',
            'What’s the most creative use of emojis you’ve ever seen?',
            'What invention doesn’t get a lot of love, but has greatly improved the world?',
            'What mythical creature do you wish actually existed?',
            'What are you interested in that most people aren’t?',
            'What smartphone feature would you actually be excited for a company to implement?',
            'What’s something people don’t worry about but really should?',
            'What’s the funniest joke you know by heart?',
            'What TV show character would it be the most fun to change places with for a week?',
            'What was cool when you were young but isn’t cool now?',
            'If magic was real, what spell would you try to learn first?',
            'If you were a ghost and could possess people, what would you make them do?',
            'What problem are you currently grappling with?',
            'What game have you spent the most hours playing?',
            'What movie, picture, or video always makes you laugh no matter how often you watch it?',
            'If animals could talk, which animal would be the most annoying?',
            'What’s the most ridiculous thing you have bought?',
            'What’s the most depressing meal you’ve eaten?',
            'What outdoor activity haven’t you tried, but would like to?',
            'When was the last time you face palmed?',
            'If you were given five million dollars to open a small museum, what kind of museum would you create?',
            'What’s the most boring super hero you can come up with?',
            'What languages do you wish you could speak?',
            'What’s your “Back in my day, we…”?',
            'If you could know the truth behind every conspiracy, but you would instantly die if you hinted that you knew the truth, would you want to know?',
            'What scientific discovery would change the course of humanity overnight if it was discovered?',
            'What’s the scariest non-horror movie?',
            'What’s the grossest food that you just can’t get enough of?',
            ' If you had to disappear and start a whole new life, what would you want your new life to look like?',
            'What movie or book do you know the most quotes from?',
            'What was one of the most interesting concerts you’ve been to?',
            'Where are you not welcome anymore?',
            'What’s the dumbest thing someone has argued with you about?',
            'If money and practicality weren’t a problem, what would be the most interesting way to get around town?',
            'What qualities do all your friends have in common?',
            'What qualities do you have which are different from your friends?',
            'What fashion trend makes you cringe or laugh every time you see it?',
            'What’s your best story of you or someone else trying to be sneaky and failing miserably?',
            'If you had a HUD that showed three stats about any person you looked at, what three stats would you want it to show?',
            'Tear gas makes people cry and laughing gas makes people giggle, what other kinds of gases do you wish existed?',
            'What’s incredibly cheap and you would pay way more for?',
            'When was the most inappropriate time you busted out in laughter?',
            'What word do you always misspell?',
            'What’s something that everyone knows is true, but we don’t like to admit it?',
            'What’s the weirdest text or email you’ve gotten?',
            'What’s the most boring sport, and what would you do to make it more exciting?',
            'What’s fine in small numbers but terrifying in large numbers?',
            'What animal would you most like to eat?',
            'What’s the most rage inducing game you’ve ever played?',
            'If cartoon physics suddenly replaced real physics, what are some things you would want to try?',
            'What questions would you like to ask a time traveler from 200 years in the future?',
            'What’s your best example of fake it till you make it?',
            'If you were given unlimited money, what will you do with it?',
            'How much do you think names affect the outcomes of people’s lives?',
            ' What did you eat so much of that now you hate it?',
            'No topic 4 u >:) **Lucky!** this is one of a 69 chance!',
        ];
        const topic_response = topic_list[Math.floor(Math.random() * topic_list.length)];
        const topicembed = new Discord.MessageEmbed()
        .setColor('#0099FF')
        .setTitle('Topic:')
        .setDescription(topic_response)
        .setImage()
        .setFooter('eh random topic ya\' know...');
        message.channel.send(topicembed)





        
        }
    }