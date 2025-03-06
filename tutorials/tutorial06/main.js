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
const isClassFull = (course) => {
    // modify this to accurately apply the filter:
    return course.EnrollmentMax <= course.EnrollmentCurrent;
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
    const isOpen = course.EnrollmentCurrent < course.EnrollmentMax;
    // modify this to be more detailed
    let status;
    if(isClassFull(course)){
        status = '<i class= "fa-circle-check fa-circle-xmark"}"></i> Closed' 
    }else{
        status = '<i class= "fa-circle-check fa-circle-check"}"></i> Open' 
    }

    return `
        <section class="course">
            <h2>${course.Title}: (${course.Code})</h2>
            <p>
                <${status} &bull;10498 &bull; Number on Waitlist 0
            </p>
            <p>
                MWF &bull;  ZEI 201 &bull; 3 credit hour(s)
            </p>
            <p><strong>Sarris, Michael</strong></p>
            
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
    let matches = courseList;

    if (openOnly) {
        matches = matches.filter(isClassFull);
    }


    matches = matches.filter(doesTermMatch);
    
    matches.forEach(course => {
        const snippet = dataToHTML(course);
        //actually add the HTML snippet to the DOM
        container.insertAdjacentHTML("beforeend", snippet);
    });

    
};
