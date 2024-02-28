/**
 * Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure.
 */

function deepEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) {
      return false;
    }

    for (let i = 0; i < value1.length; i++) {
      const isEqual = deepEqual(value1[i], value2[i]);
      if (!isEqual) {
        return false;
      }
    }

    return true;
  }

  if (typeof value1 == "object" && typeof value2 == "object") {
    if (value1 == null && value2 == null) {
      return true;
    }

    if (value1 == null || value2 == null) {
      return false;
    }

    const objKeys1 = Object.keys(value1);
    const objKeys2 = Object.keys(value2);

    if (objKeys1.length != objKeys2.length) {
      return false;
    }

    for (const key in value1) {
      if (!value2.hasOwnProperty(key)) {
        return false;
      }
      const isEqual = deepEqual(value1[key], value2[key]);
      if (!isEqual) return false;
    }
    return true;
  }

  return value1 === value2;
}

console.log(
  deepEqual(
    {
      name: "Alice",
      age: "25",
      hobbies: ["reading", "writing", "coding"],
      address: {
        city: "New York",
        zip: 10001,
      },
    },
    {
      name: "Alice",
      age: 25,
      hobbies: ["reading", "writing", "coding"],
      address: {
        city: "New York",
        zip: 10001,
      },
    }
  )
);
