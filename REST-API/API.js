class API {
  constructor() {
    this.DB = require("better-sqlite3")("../Database/Database.db", {});

    this.runRetrieveSQL = (sql) => {
      const SQL_STATEMENT = this.DB.prepare(sql);
      return SQL_STATEMENT.all();
    };

    this.runChangeSQL = (sql) => {
      const SQL_STATEMENT = this.DB.prepare(sql);
      SQL_STATEMENT.run();
    };

    this.retrievePeople = () => {
      const sql = `SELECT People.PeopleID, People.Name, People.Phone, People.DepartmentID, Departments.Name AS Department, People.Address, People.State, People.Postcode, People.Country 
            FROM People 
            INNER JOIN Departments ON People.DepartmentID = Departments.DepartmentID;`;
      return this.runRetrieveSQL(sql);
    };

    this.retrieveDepartments = () => {
      const sql =
        "SELECT Departments.DepartmentID, Departments.Name FROM Departments;";
      return this.runRetrieveSQL(sql);
    };

    this.addPeople = (
      name,
      phone,
      departmentID,
      street,
      city,
      state,
      postcode,
      country
    ) => {
      const sql = `INSERT INTO People (Name, Phone, DepartmentID, Address, Suburb, State, Postcode, Country) 
        VALUES ('${name}', '${phone}', ${departmentID}, '${address}', '${suburb}', '${state}', '${postcode}', '${country}');`;
      this.runChangeSQL(sql);
    };

    this.modifyPerson = (
      peopleID,
      name,
      phone,
      departmentID,
      address,
      suburb,
      state,
      postcode,
      country
    ) => {
      const sql = `UPDATE People 
        SET Name = '${name}', Phone = '${phone}', DepartmentID = ${departmentID}, Address = '${address}', Suburb = '${suburb}', State = '${state}', Postcode = '${postcode}', Country = '${country}' 
        WHERE PeopleID = ${peopleID};`;
        console.log(peopleID,
          name,
          phone,
          departmentID,
          address,
          suburb,
          state,
          postcode,
          country);
      this.runChangeSQL(sql);
    };

    this.closeDB = () => {
      DB.close();
    };
  }
}
module.exports = { API };
