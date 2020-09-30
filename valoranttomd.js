const axios = require('axios');
let JSSoup = require('jssoup').default;

let url = "https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-1-09/";
let html = axios.get(url).then(html => { 
    let soup = new JSSoup(html.data);
    let title = soup.find('h2','heading-02').nextElement.text.toUpperCase();
    let names = soup.findAll('h3'); 
    let titles = soup.findAll('h2');
    var patch_notes = '';

    patch_notes += `# ${title}\n\n`;
    titles.forEach(function(title){
        if (title.text == "AGENT UPDATES"){
            patch_notes += `${title.text}\n\n`;
        }
    })
//    patch_notes += `AGENT UPDATES\n\n`;

    names.forEach(function(agent){
        let agentname = agent.text;
        let info_tables = agent.findNextSiblings('table');
        patch_notes += `## ${agentname} \n`;
        info_tables.forEach(function(table){
            if(table.findPreviousSibling('h3').text !== agentname){
                //console.log('not valid changes for this agent');
            }else{
                let skill = table.find('strong').text;
                patch_notes += `- ${skill} \n`
                let changes = table.findAll('li');
                changes.forEach(function(change){
                    change = change.text;
                    change = change.replace(/&gt;/g,'>');
                    change = change.replace(/&lt;/g,'<');
                    patch_notes += `* ${change}\n`;
                })        
            }
        })
        patch_notes += `\n`;
    })
    titles.forEach(function(title){
        if (title.text == "WEAPON UPDATES"){
            patch_notes += `${title.text}\n\n`;
            let weapon_ps = title.findNextSiblings('p');
            weapon_ps.forEach(function(weapon_p){
                if(weapon_p.nextElement.name == 'strong'){
                    let weapon_name = weapon_p.nextElement.text;
                    patch_notes += `## ${weapon_name}\n`;
                    let changes_uls = weapon_p.findNextSiblings('ul');
                    changes_uls.forEach(function(changes_ul){
                        let previouses = changes_ul.findPreviousSiblings('p');
                        previouses.forEach(function(previous){
                            if( previous.text == weapon_name){
                                let change = changes_ul.findAll('li');
                                change.forEach(function(update){
                                    let updateC = update.text;
                                    updateC = updateC.replace(/&gt;/g,'>');
                                    updateC = updateC.replace(/&lt;/g,'<');
                                    console.log(updateC);
                                })
                                //console.log('yo');
                            }else{
                                //console.log('nah');
                            }
                        })
                        
                    })
                }
            })    
        }
    })
    console.log(patch_notes);
});