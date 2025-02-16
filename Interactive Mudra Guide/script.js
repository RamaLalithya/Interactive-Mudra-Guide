

function showDetails(mudra) {
    document.getElementById("mudra-title").innerText = mudraData[mudra].title;
    document.getElementById("mudra-description").innerText = mudraData[mudra].description;
    document.getElementById("mudra-info").style.display = "block";
}

function showDetails(mudraName) {
    const details = {
        pathaka:"Pataka Mudra (flag) is a single-hand gesture, where all fingers are held straight close together and thump is slightly bent. This mudra pose is used at the commencement of natya and to represent the clouds, forest, denial of objects, breasts, night, river, realm of divinities, horse, cutting, wind to decumbent, attempting to go, strength, benefaction, moon-light, fierce heat, opening the doors, in the sense of all sevn case-endings (vibhakti), tides, entering a lane, equanimity, smearing oneself, taking a pledge, silence, palmyra leaf, shield, feeling the objects, blessing, a good king, describing a location, sea, series of meritorious actions, addressing, stepping forward, grasping a sword, month, year, a drizzly day and sweeping with a broom.",
        tripathaka:"Tripataka Mudra (three parts of the flag) is a single-hand gesture where in from the Pataka pose if the ring finger is bent (almost more than half) and all other fingers are held straight, it is understood to be Tripataka. Tripataka is used to represent a crown, tree, Indra, thunder (Vajrayudha-the weapon of Indra), Ketaki flower, a lamp, flames of fire, a pigeon, putting marks, writing, an arrow and transformation, according to those who knows Natya.",
        ardhapathaka:"Ardhapataka Mudra is characterised by the bending of the little finger, along with ring finger, in Tripataka Hasta. All other fingers are held straight. Ardhapataka is used to denote leaves, writing/painting board, bank, to mention 'both', knife, flag, tower, horns and elaboration.",
        kartharimukha:"In the Ardhapataka Mudra, if the forefinger and little finger are bent backwards, it is called Kartarimukha. We can also interpret the definition as follows: In the Ardhachandra pose, if the little finger (in the bent position) and the index (in the stretched position) are bent backwards, then, it is Kartarimukha. Kartarimukha Mudra is suitable for depicting parting of a couple, conflicts, opposition, looting, corner of the eye, death, alienating, lightning, sleeping, clever or inconsistency, disjunction, fall, and creeper.",
        mayoora:"In Mayura Mudra, the tip of the ring finger and the tip of the thump should touch each other while other fingers are straight touching each other. Mayura Mudra is used in depicting peacock head/neck, creeper, bird, spewing (to throw out), parting of the locks, ornamenting forehead with a mark, dispersing water of rivers or dispersing holy water, knowledge or dialects of scriptural texts and something famous.",
        ardhachandra:"Ardhachandra Mudra is defined as a pose with thump of Pataka outstretched (all other fingers stretched out and held together to depict the half moon). Ardhachandra is used to depict digit of moon on eighth night during waning fortnight, grabbing and pushing by neck, lance, consecrating and bathing an image, dining vessel, source of origin, waist, contemplating on oneself, meditation, invocation, touching of ones limbs and accosting ordinary people. ",
        araala:"Arala Mudra is a single-hand gesture where in the forefinger of Pataka pose is bent, along with the thump and rest of the fingers are stretched and held together. Arala Mudra denotes drinking venom, nectar, etc. and a violent gale.",
        sukhathunda:"Sukatunda Mudra is when the ring finger of Arala is bent. Sukatunda is found utilised in depicting shooting of an arrow, a lance, recollecting ones repose, mystical invocations and outrageous mood.",
        musthi:"In Musti Mudra four fingers are bent and closely pressed towards the palm and thump is placed upon them. Musti is found applied to depict upright-ness, grouping ones tresses, taking hold of objects and combative posture of wrestlers. ",
        shikhara:"In Sikhara Mudra, from Musti, the thump is raised upwards and held straight. It is found used to depict the God of love, bow, column or pillar, surety, offerings to ancestors, offering of cakes to manes, the upper lips, entry of some object, a tooth, interrogation, sivalinga, denying, remembrance, proximity to gestures, drawing of girdle, embrace and ringing a bell.",
        kapitha:"Bending the forefinger of the Sikhara pose and placing it over the thumb in a pressing position, forms Kapittha pose. Kapittha Mudra is used for representing Lakshmi, Sarasvati, grasping the cymbals, milking the cows, collyrium, holding the flowers during amorous sport, the edge of upper garment, gathering cloth, waving lights or offering incense and fanning.",
        katakhamukha:"Bending the forefinger of the Sikhara pose and placing it over the thumb in a pressing position, forms Kapittha pose. Kapittha Mudra is used for representing Lakshmi, Sarasvati, grasping the cymbals, milking the cows, collyrium, holding the flowers during amorous sport, the edge of upper garment, gathering cloth, waving lights or offering incense and fanning.",
        suchi: "Suchi Hasta represents a pointed gesture, often used to indicate direction.",
        chandrakhala: "Chandrakhala Hasta symbolizes the crescent moon, representing beauty and grace.",
        padmakosha: "Padmakosha Hasta represents a lotus bud, signifying nature and delicacy.",
        sarpaseersha: "Sarpaseersha Hasta depicts a snake’s hood, symbolizing alertness.",
        mrigasirsha: "Mrigasirsha Hasta represents a deer’s head, used for various symbolic meanings.",
        simhamukha: "Simhamukha Hasta represents a lion’s face, used in storytelling.",
        kangoolascha: "Kangoola Hasta is used for representing a bell or small container.",
        alapadma: "Alapadma Hasta symbolizes a fully bloomed lotus flower.",
        chathura: "Chathura Hasta represents intelligence and cleverness.",
        bhramara: "Bhramara Hasta depicts a bee, symbolizing nature and devotion.",
        hamsasya: "Hamsasya Hasta represents a swan’s beak, often used in graceful movements.",
        hamsapaksha: "Hamsapaksha Hasta symbolizes a swan’s wing, associated with elegance.",
        samdamsha: "Samdamsha Hasta is used to indicate gathering or collecting.",
        mukula: "Mukula Hasta represents a bud, symbolizing potential and growth.",
        thamrachooda: "Thamrachooda Hasta represents a rooster’s crest.",
        trishoola: "Trishoola Hasta symbolizes the trident, representing power and energy."
    };

    const detailsContainer = document.getElementById("mudra-details");
    
    if (details[mudraName]) {
        detailsContainer.innerHTML = `
            <h2>${mudraName.replace(/^\w/, (c) => c.toUpperCase())} Hasta</h2>
            <p>${details[mudraName]}</p>
        `;
    } else {
        detailsContainer.innerHTML = `<p>Mudra details not available.</p>`;
    }
}

function closeDetails() {
    document.getElementById("mudra-info").style.display = "none";
}
