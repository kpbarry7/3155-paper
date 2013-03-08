// For your solutions, only use const assignment, recursion, and
// higher-order functions like map. Remember, recursion can always
// replace iteration!

const assert = require("assert");

// Simple function to demonstrate assertions; deepEqual is necessary
// because we are using lists

function square(xs) {
    return xs.map(function(x) { return x * x });
}

assert.deepEqual(square([]), []);
assert.deepEqual(square([0, 1, 2, 3, 4, 5]), [0, 1, 4, 9, 16, 25]);


// gcd should implement the Euclidean algorithm

function gcd(a, b) { 
	return b ? gcd(b, a % b) : a;
}

assert.equal(gcd(99, 132), 33, "gcd");
assert.equal(gcd(252, 105), 21, "gcd");


// P10 (*) Run-length encoding of a list
// Consecutive duplicates of elements are encoded as sublists [N, E]
// where N is the number of duplicates of the element E.

function encode(xs) {
	var encoding = [];
    var prev, count, i;
    for (count = 1, prev = xs[0], i = 1; i < xs.length; i++) {
        if (xs[i] != prev) {
            encoding.push([count, prev]);
            count = 1;
            prev = xs[i];
        }
		else 
            count ++;
    }
    encoding.push([count, prev]);
    return encoding;
}

//assert.deepEqual(encode([]), [])
assert.deepEqual(encode(["a", "a", "a", "a", "b", "c", "c", "a", "a", "d", "e", "e", "e", "e"]),
		 [[4, "a"], [1, "b"], [2, "c"], [2, "a"], [1, "d"], [4, "e"]])
