document.getElementById("hotelName").innerHTML = "THE DOM INTERNATINAL";
document.getElementById("slogan").innerHTML = "LUXURY Lives In The Finer Details";

let domHotel = {
    availableRooms:[[101,102,103,104], [201], [], [401,402]],
    bookRoom: [[],[],[],[]],
    roomTypes: ["Single","Double","Queen","King"],
    checkOut: [[],[],[],[]],

    
    bookRoom: function(roomNum) {
        if (this.availableRooms [(roomNum[0]-1)].includes(roomNum)) {
            this.bookRoom[(roomNum[0]-1)].push(roomNum);
            this.availableRooms[(roomNum[0]-1)].splice(this.availableRooms.indexOf(roomNum),1);
            this.updateAvailableRoomsInDom();
            }else Attention (`Alert: NO ACCESS ${roomNum}`);
    },

    checkOut: function() {
        if (this.bookRoom [(roomNum[0]-1)].includes(roomNum)) {
            this.bookRoom[(roomNum[0]-1)].splice(this.bookRoom.indexOf(roomNum),1);
            this.availableRooms[(roomNum[0]-1)].push(roomNum);
            this.updateAvailableRoomsInDom();
            }else Attention (`Alert: NO ACCESS ${roomNum}`);

    },

    updateAvailableRoomsInDom: function () {
        let linesOfHtml = "<select>";

        for (let i=0; i<this.availableRooms.length; i++){
        for (let j=0; j<this.availableRooms[i].length; j++) {

            linesOfHtml = linesOfHtml + `<option value='${domHotel.availableRooms[i][j]}'>${domHotel.availableRooms[i][j]}</option>`;
        }
    }

        linesOfHtml = linesOfHtml + "</select>";
        document.getElementById("checkList").innerHTML = linesOfHtml;

        linesOfHtml = linesOfHtml + "</select>";
        document.getElementById("checkOut").innerHTML = linesOfHtml;

    }
}

domHotel.updateAvailableRoomsInDom();
domHotel.bookRoom(102);
domHotel.bookRoom(401);
