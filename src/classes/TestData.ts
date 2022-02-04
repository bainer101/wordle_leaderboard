class TestData {
    initPlayers() {
        let names: string[] = [];
        for (let i=0; i<20; i++) {
            let len = Math.floor(Math.random() * (10 + 3) + 4);

            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;

            for ( let j = 0; j < len; j++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            names.push(result);
        }

        let objs = [
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))},
            {name: "", score: Math.floor(Math.random() * (1000 + 1))}
        ];

        for (let i=0; i < objs.length; i++) {
            objs[i].name = names[i];
        }

        return objs;
    }

    login(username: string, pin: string) {
        let players = [
            {username: 'test1', pin: '1234'},
            {username: 'test2', pin: '1234'},
            {username: 'test3', pin: '1234'},
            {username: 'test4', pin: '1234'},
            {username: 'test5', pin: '1234'},
        ];

        for (let player of players) {
            if (player.username === username && player.pin === pin) return true;
        }

        return false;
    }
}

export default TestData;