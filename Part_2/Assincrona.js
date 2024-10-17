const final = require('fs'); 
const json = require('./item.json')

for (let i of json["teams-ids"]) {

    fetch("https://v3.football.api-sports.io/teams?id=" + i, {
        headers: {
            "x-apisports-key": 'c0572e079f9634b02bf85201e65b51aa'
        }
    })

        .then(resp => resp.json()).then(processResponse)
}

let teams = {
    teams: []
}

function processResponse(bodyObj) {

    let entr = {
        id: bodyObj.response[0].team.id,
        name: bodyObj.response[0].team.name,
        stadium: bodyObj.response[0].venue.name,

    };

    teams.teams.push(entr)

    final.writeFileSync('teams_and_stadiums.json', JSON.stringify(teams, null, 2));

    if (teams.teams.length === json["teams-ids"].length) {
        console.log(teams);
    }
}

