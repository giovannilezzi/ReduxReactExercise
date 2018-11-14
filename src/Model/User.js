class User {

    constructor(name, surname) {
        this.name = name;
        this.surnam = surname;
    }

    // Adding a method to the constructor
    getName() {
        return this.name;
    }

    getSurname() {
        return this.surnam
    }

    setName(name) {
        this.name = name
    }

    setSurname(surname) {
        this.surname = surname
    }
}

export default User
