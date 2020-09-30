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
                        for (let previous of previouses){
                        //previouses.forEach(function(previous){
                            if( previous.text == weapon_name){
                                let change = changes_ul.findAll('li');

                                for (let change_piece of change){
                                    let update_text = change_piece.text;
                                    update_text = update_text.replace(/&gt;/g,'>');
                                    update_text = update_text.replace(/&lt;/g,'<');
                                    let parent_next_sibling;
                                    let next_sibling;
                                    try{
                                        parent_next_sibling = change_piece.parent.nextSibling.name;
                                        next_sibling = change_piece.nextSibling.name;
                                    }catch(err){

                                    }
                                    /*
                                    console.log('CHANGE: ', update_text);
                                    console.log('parent_next_sibling:', parent_next_sibling);
                                    console.log('next_sibling:', next_sibling);                                    
                                    */
                                    if (parent_next_sibling == 'h2'  && !next_sibling){
                                        //console.log(update_text)
                                        //console.log('GET OUT');
                                        patch_notes += `* l: ${update_text} \n`
                                        //break;
                                    }else{ 
                                        //console.log('uh: ', update_text, next_sibling)
                                        patch_notes += `* ${update_text} \n`
                                        
                                    }
                                    //break;
                                }

                                /*
                                change.forEach(function(update){
                                    let update_text = update.text;
                                    update_text = update_text.replace(/&gt;/g,'>');
                                    update_text = update_text.replace(/&lt;/g,'<');
                                    let parent_next_sibling;
                                    let next_sibling;
                                    try{
                                        parent_next_sibling = update.parent.nextSibling.name;
                                        next_sibling = update.nextSibling.name;
                                    }catch(err){

                                    }

                                    console.log('CHANGE: ', update_text);
                                    console.log('parent_next_sibling:', parent_next_sibling);
                                    console.log('next_sibling:', next_sibling);                                    

                                    if (parent_next_sibling == 'h2'  && !next_sibling){
                                        console.log('GET OUT');
                                    }else{ 
                                        if(next_sibling){
                                            patch_notes += `* ${update_text} \n`
                                        }
                                    }
                                })
                                */
                                
                            }else{
                                
                            }
                        //})
                            break;
                        }
                    })
                }
            })    
        }
    })
    console.log(patch_notes);
});