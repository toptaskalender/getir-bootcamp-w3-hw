const { v4: uuidv4 }  = require('uuid');
const db              = require('../database/database');
const { AppError }    = require('../utils');

class UserService {
  save(user) {
    try {
      user.id = uuidv4();
    
      db.push(user);
      
      return user;
    } catch (err) {
      throw err;
    }
  }

  findByEmail(email) {
    try {
      const user = db.find(user => user.email === email);

      return user;
    } catch (err) {
      throw err;
    }
  }

  findById(id) {
    try {
      const user = db.find(user => user.id == id);

      if (user === undefined) {
        throw new AppError('Cannot find a user with this id.', 400);
      }
    
      return user;
    } catch (err) {
      throw err;
    }
  }

  deleteById(id) {
    try {
      const index = db.findIndex(user => user.id == id);

      if (index === -1) {
        throw new AppError('Cannot find a user with this id.', 400);
      }

      db.splice(index, 1);
    } catch (err) {
      throw err;
    }
  }

  findByIdAndPatch(id, data) {
    try {
      const user = this.findById(id);

      Object.keys(data).forEach(key => {
        user[key] = data[key];
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  findByIdAndPut(id, data) {
    try {
      const index = db.findIndex(user => user.id == id);

      if (index === -1) {
        throw new AppError('Cannot find a user with this id.', 400);
      }

      const user  = data;
      user.id     = id;
  
      db.splice(index, 1, user);
  
      return user;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new UserService();