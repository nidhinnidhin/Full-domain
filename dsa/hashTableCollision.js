class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = []; 
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return undefined;

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] && this.table[i].length > 0) {
        console.log(i, this.table[i]);
      }
    }
  }
}


const b = new HashTable()
b.set("anu", "hall");
b.set("fg", "4");
console.log(b.get('anu'))
b.print()