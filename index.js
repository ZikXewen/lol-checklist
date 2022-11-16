"use strict";
//prettier-ignore
const championsList = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "K'Sante", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];
const stored = JSON.parse(localStorage.getItem('stored') || '{}');
let list = Object.fromEntries(championsList.map((champion) => [champion, stored[champion] || false]));
localStorage.setItem('stored', JSON.stringify(list));
const root = document.getElementById('root');
if (!root)
    throw new Error('Root element not found');
const counter = document.getElementById('counter');
if (!counter)
    throw new Error('Counter element not found');
let ct = Object.values(list).filter((v) => v).length;
const len = Object.keys(list).length;
counter.innerText = `${ct} / ${len}`;
Object.entries(list).forEach(([name, checked]) => {
    const newEl = document.createElement('button');
    newEl.innerText = name;
    if (checked)
        newEl.classList.add('checked');
    newEl.addEventListener('click', (e) => {
        const target = e.target;
        if (!target)
            throw new Error('No target');
        const name = target.innerText;
        if (!name)
            throw new Error('No name');
        ct += list[name] ? -1 : 1;
        list[name] = !list[name];
        counter.innerText = `${ct} / ${len}`;
        localStorage.setItem('stored', JSON.stringify(list));
        target.classList.toggle('checked');
    });
    root?.appendChild(newEl);
});
