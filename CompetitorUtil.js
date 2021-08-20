class CompetitorUtil {

    static createCompetitor(competitor_id, competitor_name) {

        return { id: competitor_id, name: competitor_name, rank: null, seed: null, active: true };
    }

    static getCompetitorNameOfMatchArray(match_obj, competitor_id_field) {

        let competitor_id = match_obj.length > 0 ? match_obj[0][competitor_id_field] : null;
        let competitor_obj = competitor_id != null ? bracket_obj["competitors"].filter(competitor => competitor["id"] == competitor_id) : null;
        return competitor_obj == null ? "" : competitor_obj[0]["name"];
    }

    static getCompetitorNameOfMatchObj(match_obj, competitor_id_field) {

        let competitor_id = match_obj[competitor_id_field];
        let competitor_obj = competitor_id != null ? bracket_obj["competitors"].filter(competitor => competitor["id"] == competitor_id) : null;
        return competitor_obj == null ? "" : competitor_obj[0]["name"];
    }

    static getCompetitorIdOfMatch(match_obj, competitor_id_field) {
        let competitor_id = match_obj.length > 0 ? match_obj[0][competitor_id_field] : null;
        let competitor_obj = competitor_id != null ? bracket_obj["competitors"].filter(competitor => competitor["id"] == competitor_id) : null;
        return competitor_obj == null ? "" : competitor_obj[0]["id"];
    }

    static getCompetitorSeed(match_obj, competitor_id_field) {

        let competitor_id = match_obj.length > 0 ? match_obj[0][competitor_id_field] : null;
        let competitor_obj = competitor_id != null ? bracket_obj["competitors"].filter(competitor => competitor["id"] == competitor_id) : null;
        return competitor_obj == null ? "" : competitor_obj[0]["seed"];
    }

    static updateCompetitorSeed(competitor_id, new_seed) {
        bracket_obj["competitors"].filter(competitor => {
            if (competitor["id"] == competitor_id) {

                competitor["seed"] = new_seed == null ? null : new_seed;
            }
        });
    }

    static getCompetitorIdByMatch(match_obj, competitor_id_field) {

        return match_obj.length > 0 ? match_obj[0]["metadata"]["score"][competitor_id_field] : null;
    }


    static setAvailableCompetitorsProperty() {
        bracket_obj["competitors"].forEach((item) => {
            item.active = true;
        });
    }

    static removeAvailableCompetitorsProperty() {
        bracket_obj["competitors"].forEach((item) => {
            delete item.active
        });
    }

    static checkIfTheSeedAlreadyExists(value, competitor_id) {

        let list = bracket_obj["competitors"].filter(
            competitor =>   (competitor["seed"] == value) && 
                            (competitor["seed"] != null) && 
                            (competitor["id"] != competitor_id));
        return list.length > 0 ? true : false;
    }

    static getCompetitorsBySeed(seed){

        return bracket_obj["competitors"].filter( competitor => 
            (competitor["seed"] == seed) && (competitor["seed"] != null));
    }
    static updateCompetitorsSeedSetNull(competitors){

        competitors.forEach(competitor => {
            competitor["seed"] = null;    
        });
    }
    static getCompetitorNamesOfArray(competitors){

        return competitors.map((competitor) => {
            return competitor["name"];
        }).join();
    }
}