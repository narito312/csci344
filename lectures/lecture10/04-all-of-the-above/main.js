const changeColor = () => {
    document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    
};

const addImage = () => {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    //`<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />`;

};

const clearDiv = () => {
    // clears all of the panels of content
};

const tracks = [
    {
        id: "6dGnYIeXmHdcikdzNNDMm2",
        name: "Here Comes The Sun",
        album_name: "Abbey Road (Remastered)",
        artist_name: "The Beatles"
    }, {
        id: "3Am0IbOxmvlSXro7N5iSfZ",
        name: "Strawberry Fields Forever",
        album_name: "Magical Mystery Tour (Remastered)",
        artist_name: "The Beatles"
    }, {
        id: "2EqlS6tkEnglzr7tkKAAYD",
        name: "Come Together",
        album_name: "Abbey Road (Remastered)",
        artist_name: "The Beatles"
    }
 ];

 for(i = 0; i < tracks.length; i++){
    console.log(tracks[i].album_name);
 }


