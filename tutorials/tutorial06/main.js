// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;
    console.log(searchTerm, openOnly);

    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassOpen = (course) => {
    // modify this to accurately apply the filter:
    return course.EnrollmentMax > course.EnrollmentCurrent;
};

// Part 1.1b
const doesTermMatch = (course) => {
    let match = false;

    //
    if(course.Title.toLowerCase().includes(searchTerm.toLowerCase())){
        match = true;
    }
    return match;
    // //instructor check
    // if(course.Title.toLowerCase().includes(searchTerm.toLowerCase())){
    //     match = true;
    // }
};

// Part 1.2
const dataToHTML = (course) => {
    // modify this to be more detailed
    let status;
    let seatsAvailable = course.EnrollmentMax - course.EnrollmentCurrent;

    if(!isClassOpen(course)){
        status = '<i class= "fa-circle-check fa-circle-xmark"}"></i> Closed' 
    }else{
        status = '<i class= "fa-circle-check fa-circle-check"}"></i> Open' 
    }

    if(seatsAvailable < 0){
        seatsAvailable = 0;
    }

    return `
        <section class="course">
            <h2>${course.Title}: (${course.Code})</h2>
            <p>
                <${status} &bull;${course.CRN} &bull; Seats Available: ${seatsAvailable};
            </p>
            <p>
                ${course.Days || "TBD"} &bull;  ${course.Location.FullLocation || "TBD"} &bull; ${course.Hours} credit hour(s)
            </p>
            <p><strong>${course.Instructors[0].Name}</strong></p>
            
        </section>
    `;
    
};

// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:

    const container = document.querySelector(".courses");
    container.innerHTML = null;

    //filter by search term: 
    let matches = matches.filter(doesTermMatch);
    matches = matches.filter(isClassOpen);

    if (openOnly) {
        matches = matches.filter(isClassFull);
    }
    
    matches.forEach(course => {
        const snippet = dataToHTML(course);
        //actually add the HTML snippet to the DOM
        container.insertAdjacentHTML("beforeend", snippet);
    });

    
};
