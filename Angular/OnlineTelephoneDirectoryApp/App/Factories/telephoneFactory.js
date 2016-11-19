app.factory('telephoneFactory', function () {
    var factory = {};
    var addressBook = [];
    var init = function () {
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
        } else {
            addressBook.push({Name:'satya',Email:'satya@gmail.com',Mobile:'345444',UserId:1});
        }
    }
    init();

    factory.getContacts = function () {
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
        }
        return addressBook;
    }

    factory.getContactsByUserId = function (userId) {
        var userContacts = [];
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
        }
        for (var i = 0; i < addressBook.length; i++) {
            if (addressBook[i].UserId == userId) {
                userContacts.push(addressBook[i]);
            }
        }
        return userContacts;
        
    }

    factory.addNewContact = function (contact) {
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
            addressBook.push(contact);
        } else {
            addressBook.push(contact);
        }
        localStorage["addressBook"] = JSON.stringify(addressBook);
    }
    factory.deleteContact = function (selectedContact) {
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
        }

        for (var i = 0; i < addressBook.length; i++) {
            if (addressBook[i].UserId == selectedContact.UserId && addressBook[i].Name) {
                addressBook.splice(i, 1);
                break;
            }
        }
        localStorage["addressBook"] = JSON.stringify(addressBook);

    }
    factory.updateContact = function (selectedContact) {
        if (localStorage["addressBook"] != null && localStorage["addressBook"] != null) {
            addressBook = JSON.parse(localStorage["addressBook"]);
        }

        for (var i = 0; i < addressBook.length; i++) {
            if (addressBook[i].UserId == selectedContact.UserId && addressBook[i].Name) {
                addressBook[i].Email = selectedContact.Name;
                addEventListener[i].Mobile = selectedContact.Mobile;
                break;
            }
        }
        localStorage["addressBook"] = JSON.stringify(addressBook);
    }
    return factory;
});