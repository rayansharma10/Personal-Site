const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');

class DataStore {
  constructor(filename) {
    this.filepath = path.join(DATA_DIR, filename);
    this.ensureDataDir();
  }

  ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  read() {
    try {
      if (fs.existsSync(this.filepath)) {
        return JSON.parse(fs.readFileSync(this.filepath, 'utf8'));
      }
      return [];
    } catch (error) {
      console.error('Error reading data:', error);
      return [];
    }
  }

  write(data) {
    try {
      fs.writeFileSync(this.filepath, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error('Error writing data:', error);
      return false;
    }
  }
}

module.exports = DataStore;
