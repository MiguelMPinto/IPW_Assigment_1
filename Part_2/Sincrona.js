const final = require('fs'); 
const json = require('./item.json')

async function f1(){
for (let i of json["teams-ids"]) {

    let rsp = await fetch("https://v3.football.api-sports.io/teams?id=" + i, {
        headers: {
            "x-apisports-key": 'c0572e079f9634b02bf85201e65b51aa'
        }
    })

        let obj = await rsp.json()
        processResponse(obj)
}
}
let teams = {
    teams: []
}
f1()

function processResponse(bodyObj) {

    let entr = {
        id: bodyObj.response[0].team.id,
        name: bodyObj.response[0].team.name,
        stadium: bodyObj.response[0].venue.name,

    };

    teams.teams.push(entr)

    final.writeFileSync('teams_and_stadiums2.json', JSON.stringify(teams, null, 2));

    if (teams.teams.length === json["teams-ids"].length) {
        console.log(teams);
    }
}

