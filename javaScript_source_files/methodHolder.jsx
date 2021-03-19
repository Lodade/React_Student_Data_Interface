async function pageFetch() {
    /*
    These two commented lines are the original code. The object below is the result you get from the fetch statement.
    The large object definition was added incase the link used in the fetch statement goes dead.
    let response = await fetch('https://api.hatchways.io/assessment/students');
    let result = await response.json();
    */
    let result = {
        "students": [{ "city": "Fush\u00eb-Muhurr", "company": "Yadel", "email": "iorton0@imdb.com", "firstName": "Ingaberg", "grades": ["78", "100", "92", "86", "89", "88", "91", "87"], "id": "1", "lastName": "Orton", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg", "skill": "Oracle" },
        { "city": "Sanghan", "company": "Avamm", "email": "cboards1@weibo.com", "firstName": "Clarke", "grades": ["75", "89", "95", "93", "99", "82", "89", "76"], "id": "2", "lastName": "Boards", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg", "skill": "Sports" },
        { "city": "Kugesi", "company": "Skalith", "email": "lromanet2@wired.com", "firstName": "Laurens", "grades": ["88", "90", "79", "82", "81", "99", "94", "73"], "id": "3", "lastName": "Romanet", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg", "skill": "Employee Handbooks" },
        { "city": "Krajan", "company": "Mybuzz", "email": "bskitt3@aboutads.info", "firstName": "Berti", "grades": ["88", "93", "92", "81", "95", "98", "77", "94"], "id": "4", "lastName": "Skitt", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg", "skill": "Nutrition Education" },
        { "city": "Huiqi", "company": "Avavee", "email": "msummerley4@craigslist.org", "firstName": "Mureil", "grades": ["71", "81", "72", "92", "79", "82", "91", "90"], "id": "5", "lastName": "Summerley", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg", "skill": "ISO 14971" },
        { "city": "Jianghong", "company": "Twinte", "email": "rcoryndon5@cargocollective.com", "firstName": "Robbyn", "grades": ["97", "92", "72", "99", "92", "92", "79", "96"], "id": "6", "lastName": "Coryndon", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg", "skill": "Cinema 4D" },
        { "city": "Sanxi", "company": "Buzzster", "email": "seykel6@examiner.com", "firstName": "Sheena", "grades": ["74", "95", "75", "95", "85", "97", "88", "85"], "id": "7", "lastName": "Eykel", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "Ulead VideoStudio" },
        { "city": "Huancheng", "company": "Edgeblab", "email": "mewen7@ycombinator.com", "firstName": "Minnnie", "grades": ["80", "100", "97", "78", "99", "99", "76", "85"], "id": "8", "lastName": "Ewen", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg", "skill": "Vulcan" },
        { "city": "Luoxiong", "company": "Fadeo", "email": "riban8@hubpages.com", "firstName": "Rory", "grades": ["70", "100", "75", "96", "83", "90", "94", "92"], "id": "9", "lastName": "Iban", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg", "skill": "EE4" },
        { "city": "Toulon", "company": "Yakidoo", "email": "lroxby9@cam.ac.uk", "firstName": "Lenna", "grades": ["70", "99", "81", "83", "78", "95", "81", "76"], "id": "10", "lastName": "Roxby", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg", "skill": "LPS" },
        { "city": "Lazo", "company": "Photolist", "email": "rfitzalana@parallels.com", "firstName": "Rosalynd", "grades": ["98", "93", "78", "87", "99", "89", "97", "81"], "id": "11", "lastName": "FitzAlan", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "Geography" },
        { "city": "Bichura", "company": "Babblestorm", "email": "srapellib@adobe.com", "firstName": "Stephanie", "grades": ["83", "97", "70", "96", "75", "98", "90", "71"], "id": "12", "lastName": "Rapelli", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg", "skill": "Identity Management" },
        { "city": "Chval\u0161iny", "company": "Mynte", "email": "mmacdirmidc@plala.or.jp", "firstName": "Maire", "grades": ["87", "73", "85", "98", "73", "95", "75", "97"], "id": "13", "lastName": "MacDirmid", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg", "skill": "Outdoor Advertising" },
        { "city": "Itaparica", "company": "Photospace", "email": "nshepherdd@desdev.cn", "firstName": "Nicoline", "grades": ["90", "73", "88", "95", "71", "100", "80", "86"], "id": "14", "lastName": "Shepherd", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nonipsaet.jpg", "skill": "Amazon VPC" },
        { "city": "Praia da Vit\u00f3ria", "company": "Vitz", "email": "ythornse@github.com", "firstName": "Yoshi", "grades": ["78", "78", "96", "92", "80", "82", "91", "99"], "id": "15", "lastName": "Thorns", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg", "skill": "DMR" },
        { "city": "Sambir", "company": "Twitterwire", "email": "mtothef@shutterfly.com", "firstName": "Marna", "grades": ["88", "74", "76", "89", "75", "97", "75", "86"], "id": "16", "lastName": "Tothe", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "PFI" },
        { "city": "Sarulla", "company": "Blogpad", "email": "okearyg@g.co", "firstName": "Orelia", "grades": ["78", "92", "86", "80", "82", "95", "76", "84"], "id": "17", "lastName": "Keary", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg", "skill": "General Surgery" },
        { "city": "Ochakovo-Matveyevskoye", "company": "Mydeo", "email": "mswaith@cafepress.com", "firstName": "Moses", "grades": ["84", "82", "92", "74", "87", "98", "86", "73"], "id": "18", "lastName": "Swait", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg", "skill": "Sales Tax" },
        { "city": "Youxi Chengguanzhen", "company": "Avaveo", "email": "fnusseyi@skyrock.com", "firstName": "Fonsie", "grades": ["100", "75", "84", "91", "100", "97", "98", "87"], "id": "19", "lastName": "Nussey", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/remtemporavelit.jpg", "skill": "Urbanism" },
        { "city": "Limoges", "company": "Tazzy", "email": "srydingsj@phoca.cz", "firstName": "Skelly", "grades": ["89", "81", "77", "93", "96", "96", "70", "79"], "id": "20", "lastName": "Rydings", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/etporroalias.jpg", "skill": "IFTA" },
        { "city": "\u0141ob\u017cenica", "company": "Quatz", "email": "obrennekek@yellowbook.com", "firstName": "Olly", "grades": ["81", "74", "77", "82", "74", "88", "86", "87"], "id": "21", "lastName": "Brenneke", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg", "skill": "ATM Networks" },
        { "city": "Divo", "company": "Gigazoom", "email": "nbadwickl@nifty.com", "firstName": "Norby", "grades": ["73", "99", "91", "92", "85", "96", "95", "73"], "id": "22", "lastName": "Badwick", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/delenitiestdolorum.jpg", "skill": "Media Relations" },
        { "city": "Sortavala", "company": "Eamia", "email": "mmichiem@nifty.com", "firstName": "Melody", "grades": ["100", "83", "76", "71", "93", "95", "73", "88"], "id": "23", "lastName": "Michie", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg", "skill": "PC Games" },
        { "city": "Taupo", "company": "Midel", "email": "jwillougheyn@psu.edu", "firstName": "Janice", "grades": ["71", "80", "83", "99", "91", "95", "81", "75"], "id": "24", "lastName": "Willoughey", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/dolordoloremassumenda.jpg", "skill": "Kondor+" },
        { "city": "Krajandadapmulyo", "company": "Wikibox", "email": "ggallymoreo@mashable.com", "firstName": "Geraldine", "grades": ["97", "71", "89", "85", "85", "87", "92", "75"], "id": "25", "lastName": "Gallymore", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg", "skill": "WTL" }]
    };
    return result;
}

async function averageFinder(grades) {
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
        average += grades[i];
    }
    average = average / grades.length;
    return average;
}

async function studentFilter(nameFilter, tagFilter, students) {
    let result = [];
    let resultSpot = 0;
    let passedName = false;
    let passedTag = false;
    for (let i = 0; i < students.length; i++) {
        passedName = false;
        passedTag = false;
        if ((students[i].firstName + " " + students[i].lastName).toLowerCase().search(nameFilter.toLowerCase()) !== -1 || nameFilter === "") {
            passedName = true;
        }
        if (students[i].tags !== undefined) {
            for (let j = 0; j < students[i].tags.length; j++) {
                if (students[i].tags[j].toLowerCase().search(tagFilter.toLowerCase()) !== -1 || tagFilter === "") {
                    passedTag = true;
                }
            }
        } else {
            students[i].tags = [];
        }
        if ((nameFilter === "" && tagFilter === "") || (passedName === true && tagFilter === "") || (passedTag === true && nameFilter === "") || (passedName === true && passedTag === true)) {
            result[resultSpot] = students[i];
            resultSpot++;
        }
    }
    return result;
}

async function studentTagAdder(givenId, tagInfo, students) {
    let resultStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === givenId) {
            if (students[i].tags === undefined) {
                students[i].tags = [tagInfo];
            } else {
                students[i].tags[students[i].tags.length] = tagInfo;
            }
        }
    }
    resultStudents = students;
    return resultStudents;
}