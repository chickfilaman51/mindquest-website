function addSub(x, y, type) {
    var problem = {};
    problem.question = "<div>\\(";
    switch (type) {
    case "+":
        problem.question += x + " + " + y;
        problem.answer = x + y;
        break;
    case "-":
        problem.question += x + " &minus; " + y;
        problem.answer = x - y;
        break;
    problem.question += "\\)</div>";
    problem.typedAnswer = roundError(problem.answer);
    problem.answer = "<div>\\(" + roundError(problem.answer) + "\\)</div>";
    return problem;
}


function ordering(length, decimal, negative, descending, range) {
    var list = new Array(length);
    var problem = {};
    var sequence = "";
    for (var i = 0; i < list.length; i++) {
        list[i] = Math.floor(Math.random() * range);
        if (decimal) {
            list[i] /= Math.pow(10, getRandom(0, 2));
        }
        if (negative) {
            list[i] = -list[i];
        }
    }
    problem.question = "<div>Write in ";
    if (descending) {
        problem.question += "descending";
    } else {
        problem.question += "ascending";
    }
    problem.question += " order:</div><div>\\(";
    for (i = 0; i < list.length - 1; i++) {
        problem.question += list[i] + ", ";
    }
    problem.question += list[i];
    if (descending) {
        list.sort(function(a, b) {
            return b - a
        });
    } else {
        list.sort(function(a, b) {
            return a - b
        });
    }
    for (i = 0; i < list.length - 1; i++) {
        sequence += list[i] + ", ";
    }
    sequence += list[i];
    problem.question += "\\)</div>";
    problem.answer = "<div>\\(" + list + "\\)</div>";
    return problem;
}

function multDiv(x, y, type) {
    var problem = {};
    problem.question = "<div>\\(";
    switch (type) {
    case "*":
        problem.question += x + "\\ &#215;\\ " + y;
        problem.answer = x * y;
        break;
    case "/":
        problem.question += x + "\\ &divide;\\ " + y;
        problem.answer = x / y;
        break;
    }
    problem.question += "\\)</div>";
    problem.typedAnswer = roundError(problem.answer);
    problem.answer = "<div>\\(" + roundError(problem.answer) + "\\)</div>";
    return problem;
}


function convertingMetricLength(m, from, to) {
    var problem = {};
    var unit = new Array("mm","cm","m","km");
    var cm = roundError(m * 100);
    var mm = roundError(cm * 10);
    var km = roundError(m / 1000);
    var value = new Array(mm,cm,m,km);
    problem.question = "Convert " + value[from] + " " + unit[from] + " to " + unit[to];
    switch (to) {
    case 0:
        problem.answer = mm;
        break;
    case 1:
        problem.answer = cm;
        break;
    case 2:
        problem.answer = m;
        break;
    case 3:
        problem.answer = km;
        break;
    }
    problem.answer += " " + unit[to];
    return problem;
}

function convertingMetricWeight(kg, from, to) {
    var problem = {};
    var unit = new Array("mg","g","kg","tonnes");
    var g = roundError(kg * 1000);
    var mg = roundError(g * 1000);
    var tonnes = roundError(kg / 1000);
    var value = new Array(mg,g,kg,tonnes);
    problem.question = "Convert " + value[from] + " " + unit[from] + " to " + unit[to];
    switch (to) {
    case 0:
        problem.answer = mg;
        break;
    case 1:
        problem.answer = g;
        break;
    case 2:
        problem.answer = kg;
        break;
    case 3:
        problem.answer = tonnes;
        break;
    }
    problem.answer += " " + unit[to];
    return problem;
}

function convertingMetricVolume(l, from, to) {
    var problem = {};
    var unit = new Array("ml","cl","l");
    var cl = roundError(l * 100);
    var ml = roundError(cl * 10);
    var value = new Array(ml,cl,l);
    problem.question = "Convert " + value[from] + " " + unit[from] + " to " + unit[to];
    switch (to) {
    case 0:
        problem.answer = ml;
        break;
    case 1:
        problem.answer = cl;
        break;
    case 2:
        problem.answer = l;
        break;
    }
    problem.answer += " " + unit[to];
    return problem;
}

function polygonSides(maxPol) {
    var problem = {};
    var polygon = [];
    polygon.push({
        name: "a triangle",
        sides: 3
    });
    polygon.push({
        name: "an equilateral triangle",
        sides: 3
    });
    polygon.push({
        name: "an isosceles triangle",
        sides: 3
    });
    polygon.push({
        name: "a scalene triangle",
        sides: 3
    });
    polygon.push({
        name: "a quadrilateral",
        sides: 4
    });
    polygon.push({
        name: "a square",
        sides: 4
    });
    polygon.push({
        name: "a rectangle",
        sides: 4
    });
    polygon.push({
        name: "a parallelogram",
        sides: 4
    });
    polygon.push({
        name: "a rhombus",
        sides: 4
    });
    polygon.push({
        name: "a trapezium",
        sides: 4
    });
    polygon.push({
        name: "a kite",
        sides: 4
    });
    polygon.push({
        name: "a pentagon",
        sides: 5
    });
    polygon.push({
        name: "a hexagon",
        sides: 6
    });
    polygon.push({
        name: "a heptagon",
        sides: 7
    });
    polygon.push({
        name: "an octagon",
        sides: 8
    });
    polygon.push({
        name: "a nonagon",
        sides: 9
    });
    polygon.push({
        name: "a decagon",
        sides: 10
    });
    polygon.push({
        name: "a hendecagon",
        sides: 11
    });
    polygon.push({
        name: "a dodecagon",
        sides: 12
    });
    polygon.push({
        name: "a tridecagon",
        sides: 13
    });
    polygon.push({
        name: "a tetradecagon",
        sides: 14
    });
    polygon.push({
        name: "a pentadecagon",
        sides: 15
    });
    polygon.push({
        name: "a hexadecagon",
        sides: 16
    });
    polygon.push({
        name: "a heptadecagon",
        sides: 17
    });
    polygon.push({
        name: "a octadecagon",
        sides: 18
    });
    polygon.push({
        name: "a enneadecagon",
        sides: 19
    });
    polygon.push({
        name: "an icosagon",
        sides: 20
    });
    polygon.push({
        name: "a triacontagon",
        sides: 30
    });
    polygon.push({
        name: "a tetracontagon",
        sides: 40
    });
    polygon.push({
        name: "a pentacontagon",
        sides: 50
    });
    polygon.push({
        name: "a hexacontagon",
        sides: 60
    });
    polygon.push({
        name: "a heptacontagon",
        sides: 70
    });
    polygon.push({
        name: "an octacontagon",
        sides: 80
    });
    polygon.push({
        name: "an enneacontagon",
        sides: 90
    });
    polygon.push({
        name: "a hectogon",
        sides: 100
    });
    polygon.push({
        name: "a chiliagon",
        sides: 1000
    });
    polygon.push({
        name: "a myriagon",
        sides: 10000
    });
    polygon.push({
        name: "a megagon",
        sides: 1000000
    });
    temp = getRandom(0, maxPol);
    problem.question = "<div>How many sides does " + polygon[temp].name + " have?</div>";
    problem.answer = polygon[temp].sides;
    return problem;
}

function convertingTime(from, to, x) {
    var units = ["seconds", "minutes", "hours", "days", "weeks"];
    var mutliplier = [1, 60, 60, 24, 7];
    var problem = {};
    problem.question = "Convert " + x + " " + units[from] + " to " + units[to];
    if (to > from) {
        for (var i = from + 1; i <= to; i++) {
            x /= mutliplier[i];
        }
    }
    if (from > to) {
        for (var i = to + 1; i <= from; i++) {
            x *= mutliplier[i];
        }
    }
    problem.answer = roundError(x) + " " + units[to];
    return problem;
}

function equationsIfThen(type, a, b, rhs) {
    var problem = {};
    var letter = "x";
    var e1 = "";
    var e2 = "";
    var ans = 0;
    switch (type) {
    case 0:
        e1 = a + letter + "=" + rhs;
        e2 = a + letter + "+" + b;
        ans = rhs + b;
        break;
    case 1:
        e1 = a + letter + "=" + rhs;
        e2 = a + letter + "-" + b;
        ans = rhs - b;
        break;
    case 2:
        var mults = [2, 10];
        var m = mults[getRandom(0, mults.length - 1)];
        e1 = a + letter + "=" + rhs;
        e2 = m * a + letter;
        ans = rhs * m;
        break;
    case 3:
        e1 = a + letter + "=" + rhs;
        e2 = a / 2 + letter;
        ans = rhs / 2;
        break;
    case 4:
        e1 = a + letter + "=" + rhs;
        e2 = a + "(" + letter + "+" + 1 + ")";
        ans = rhs + a;
        break;
    case 5:
        e1 = a + letter + "=" + rhs;
        e2 = a + "(" + letter + "-" + 1 + ")";
        ans = rhs - a;
        break;
    case 6:
        e1 = a + letter + "=" + rhs;
        e2 = -a + letter + "+" + b;
        ans = -rhs + b;
        break;
    case 7:
        e1 = a + letter + "=" + rhs;
        e2 = -a + letter + "-" + b;
        ans = -rhs - b;
        break;
    case 8:
        e1 = a + letter + "=" + rhs;
        e2 = -a + "(" + letter + "+" + 1 + ")";
        ans = -rhs - a;
        break;
    case 9:
        e1 = a + letter + "=" + rhs;
        e2 = -a + "(" + letter + "-" + 1 + ")";
        ans = -rhs + a;
        break;
    }
    var answer = e2 + "=" + ans;
    e2 += "=\\text{ }?";
    problem.question = "<div>If \\(" + e1 + "\\),</div>";
    problem.question += "<div>then \\(" + e2 + "\\)</div>";
    problem.answer = "\\(" + answer + "\\)";
    return problem;
}

function fourOpsFractions(w1, n1, d1, w2, n2, d2, w3, n3, d3, o1, o2) {
    var problem = {};
    if (w1 === 0) {
        w1 = "";
    }
    if (w2 === 0) {
        w2 = "";
    }
    if (w3 === 0) {
        w3 = "";
    }
    var f1 = w1 + "\\frac{" + n1 + "}{" + d1 + "}";
    var f2 = w2 + "\\frac{" + n2 + "}{" + d2 + "}";
    var f3 = w3 + "\\frac{" + n3 + "}{" + d3 + "}";
    n1 = w1 * d1 + n1;
    n2 = w2 * d2 + n2;
    n3 = w3 * d3 + n3;
    if (o1 == "+") {
        var num = n1 * d2 + n2 * d1;
        var den = d1 * d2;
    } else if (o1 == "-") {
        num = n1 * d2 - n2 * d1;
        den = d1 * d2;
    } else if (o1 == "&#215;") {
        num = n1 * n2;
        den = d1 * d2;
    } else if (o1 == "&divide;") {
        num = n1 * d2;
        den = d1 * n2;
    }
    if (o2 == "+") {
        num = num * d3 + n3 * den;
        den *= d3;
    } else if (o2 == "-") {
        num = num * d3 - n3 * den;
        den *= d3;
    } else if (o2 == "&#215;") {
        num = num * n3;
        den = den * d3;
    } else if (o2 == "&divide;") {
        num = num * d3;
        den = den * n3;
    }
    problem.question = "\\( " + f1 + "\\ " + o1 + "\\ " + f2;
    if (o2) {
        problem.question += "\\ " + o2 + "\\ " + f3;
    }
    problem.question += "\\)";
    var whole = Math.floor(num / den);
    if (whole < 0) {
        whole++;
        if (whole != 0) {
            num = Math.abs(num);
        }
    }
    num = num % den;
    var hcf = HCF(num, den);
    num /= hcf;
    den /= hcf;
    problem.answer = "\\(";
    problem.typedAnswer = "";
    if (whole != 0) {
        problem.answer += whole;
        problem.typedAnswer += whole;
    }
    if (whole != 0 && num != 0) {
        problem.typedAnswer += " ";
    }
    if (num != 0) {
        problem.answer += "\\frac{" + num + "}{" + den + "}";
        problem.typedAnswer += num + "/" + den;
    }
    if (whole == 0 && num == 0) {
        problem.answer += "0";
        problem.typedAnswer = "0";
    }
    problem.answer += "\\)";
    return problem;
}

function areaCircle(r, pi) {
    var problem = {};
    var unit = "cm";
    if (toss()) {
        unit = "mm";
    }
    if (toss()) {
        unit = "m";
    }
    var area = "\\(";
    if (pi) {
        area += r * r + "&pi;";
    } else {
        area += Math.round(10 * r * r * Math.PI) / 10;
    }
    area += " \\text{ " + unit + "}^2 \\)";
    var max = 120;
    var radius = getRandom(max / 2 - 10, max / 2);
    var angle = Math.PI / 2 * getRandom(0, 3);
    var x2 = Math.cos(angle) * radius;
    var y2 = Math.sin(angle) * radius;
    problem.question = "<div>Find the area of this circle.</div>";
    problem.question += "<svg width='" + max + "' height='" + max + "'>";
    problem.question += "<circle cx='" + max / 2 + "' cy='" + max / 2 + "' r='" + radius + "' stroke='black' fill='#ffffff' />";
    problem.question += "<circle cx='" + max / 2 + "' cy='" + max / 2 + "' r='" + 1 + "' stroke='black' fill='#000000' />";
    problem.question += "<line x1='" + max / 2 + "' y1='" + max / 2 + "' x2='" + (max / 2 + x2) + "' y2='" + (max / 2 + y2) + "' stroke='black' />";
    problem.question += "<text x='" + (max / 2) + "' y='" + (max / 2 + y2 / 2 - 5) + "' font-size='0.7em' fill='#000000'>" + r + " " + unit + "</text>";
    problem.question += "</svg>";
    if (pi) {
        problem.question += "<div>Give your answer in terms of \\(\\pi\\).</div>";
    } else {
        problem.question += "<div>Round your answer to 1d.p.</div>";
    }
    problem.answer = area;
    return problem;
}



function factors(maxFactors, minNumber, maxNumber) {
    var problem = {};
    var totalFactors = maxFactors + 1;
    while (totalFactors > maxFactors) {
        totalFactors = 1;
        var answer = "1";
        var x = getRandom(minNumber, maxNumber);
        if (x % 2 === 1 && Math.random() < 0.5 && x < maxNumber) {
            x++;
        }
        for (var i = 2; i <= x; i++) {
            if (x % i === 0) {
                answer += "," + i;
                totalFactors++;
            }
        }
    }
    problem.question = "<div>List all the factors of \\(" + x + "\\).</div>";
    problem.answer = "<div>\\(" + answer + "\\)</div>";
    problem.typedTanswer = answer;
    return problem;
}

function multiples(multiple, x) {
    var problem = {};
    problem.question = "<div>Write down the \\(" + multiple + "\\)<sup>" + ordinal(multiple) + "</sup> multiple of \\(" + x + "\\).</div>";
    problem.answer = x * multiple;
    return problem;
}

function hcf(x, y, z) {
    var problem = {};
    if (z) {
        problem.question = "Find the highest common factor of " + x + ", " + y + " and " + z + ".";
        problem.answer = HCF(HCF(x, y), z);
    } else {
        problem.question = "Find the highest common factor of " + x + " and " + y + ".";
        problem.answer = HCF(x, y);
    }
    return problem;
}

function lcm(x, y, z) {
    var problem = {};
    if (z) {
        var temp = x * y / (HCF(x, y));
        problem.question = "Find the lowest common multiple of " + x + ", " + y + " and " + z + ".";
        problem.answer = temp * z / HCF(temp, z);
    } else {
        problem.question = "Find the lowest common multiple of " + x + " and " + y + ".";
        problem.answer = x * y / (HCF(x, y));
    }
    return problem;
}

function collectingTerms(letters, variables, coeff, mixed) {
    var problem = {};
    var totalTerms = coeff.length;
    problem.question = "<div>Simplify fully</div><div>\\(";
    for (var i = 0; i < totalTerms; i++) {
        if (coeff[i] > 0 && i > 0) {
            problem.question += " + ";
        }
        if (coeff[i] < 0) {
            problem.question += " - ";
        }
        if (Math.abs(coeff[i]) > 1) {
            problem.question += Math.abs(coeff[i]);
        }
        if (coeff[i] !== 0) {
            problem.question += variables[i];
        }
    }
    problem.question += "\\)</div>";
    var collected = new Array();
    for (i = 0; i < letters.length; i++) {
        var count = 0;
        for (var j = 0; j < totalTerms; j++) {
            if (variables[j] === letters[i]) {
                count += coeff[j];
            }
        }
        collected.push(count);
    }
    var answer = "";
    for (i = 0; i < letters.length; i++) {
        if (collected[i] > 0 && i > 0) {
            answer += " + ";
        }
        if (collected[i] < 0) {
            answer += " - ";
        }
        if (Math.abs(collected[i]) > 1) {
            answer += Math.abs(collected[i]);
        }
        if (collected[i] !== 0) {
            answer += letters[i];
        }
    }
    if (answer === "") {
        answer = "0";
    }
    problem.typedAnswer = answer;
    problem.answer = "\\(" + answer + "\\)";
    return problem;
}

function convertFDP(type, num, den) {
    var problem = {};
    var decimal = "\\(" + roundError(num / den) + "\\)";
    var percentage = "\\(" + roundError(num / den * 100) + "\\)";
    num = roundError(num);
    den = roundError(den);
    var whole = Math.floor(num / den);
    if (whole < 0) {
        whole++;
        if (whole != 0) {
            num = Math.abs(num);
        }
    }
    num = num % den;
    var hcf = HCF(num, den);
    num /= hcf;
    den /= hcf;
    var fraction = "\\(";
    var typedFraction = "";
    if (whole != 0) {
        fraction += whole;
        typedFraction += whole;
    }
    if (whole != 0 && num != 0) {
        typedFraction += " ";
    }
    if (num != 0) {
        fraction += "\\frac{" + num + "}{" + den + "}";
        typedFraction += num + "/" + den;
    }
    if (whole == 0 && num == 0) {
        fraction += "0";
        typedFraction = "0";
    }
    fraction += "\\)";
    problem.question = "Write ";
    switch (type) {
    case "PD":
        problem.question += percentage + "% as a decimal.";
        problem.answer = decimal;
        break;
    case "DP":
        problem.question += decimal + " as a percentage.";
        problem.answer = percentage + "%";
        break;
    case "DF":
        problem.question += decimal + " as a fraction.";
        problem.answer = fraction;
        problem.typedAnswer = typedFraction;
        break;
    case "PF":
        problem.question += percentage + "% as a fraction.";
        problem.answer = fraction;
        problem.typedAnswer = typedFraction;
        break;
    case "FD":
        problem.question += fraction + " as a decimal.";
        problem.answer = decimal;
        break;
    case "FP":
        problem.question += fraction + " as a percentage.";
        problem.answer = percentage + "%";
        break;
    }
    return problem;
}

function circumferenceCircle(r, pi) {
    var problem = {};
    var unit = "cm";
    if (toss()) {
        unit = "mm";
    }
    if (toss()) {
        unit = "m";
    }
    var circumference = "\\(";
    if (pi) {
        circumference += 2 * r + "&pi;";
    } else {
        circumference += Math.round(10 * 2 * r * Math.PI) / 10;
    }
    circumference += " \\text{ " + unit + "} \\)";
    var max = 120;
    var radius = getRandom(max / 2 - 10, max / 2);
    var angle = 0;
    var x2 = Math.cos(angle) * radius;
    var y2 = Math.sin(angle) * radius;
    problem.question = "<div>Find the circumference of this circle.</div>";
    problem.question += "<svg width='" + max + "' height='" + max + "'>";
    problem.question += "<circle cx='" + max / 2 + "' cy='" + max / 2 + "' r='" + radius + "' stroke='black' fill='#ffffff' />";
    problem.question += "<circle cx='" + max / 2 + "' cy='" + max / 2 + "' r='" + 1 + "' stroke='black' fill='#000000' />";
    problem.question += "<line x1='" + max / 2 + "' y1='" + max / 2 + "' x2='" + (max / 2 + x2) + "' y2='" + (max / 2 + y2) + "' stroke='black' />";
    problem.question += "<text x='" + (max / 2) + "' y='" + (max / 2 + y2 / 2 - 5) + "' font-size='0.7em' fill='#000000'>" + r + " " + unit + "</text>";
    problem.question += "</svg>";
    if (pi) {
        problem.question += "<div>Give your answer in terms of \\(\\pi\\).</div>";
    } else {
        problem.question += "<div>Round your answer to 1d.p.</div>";
    }
    problem.answer = circumference;
    return problem;
}

function combiningRatios(max) {
    var problem = {};
    var seed = getRandom(0, 30);
    var x = letterPicker(seed);
    var y = letterPicker(seed + 1);
    var z = letterPicker(seed + 2);
    var a = getRandom(1, max);
    var c = getRandom(1, max);
    do {
        var b = getRandom(1, max);
        var d = getRandom(1, max);
    } while (a === b || c === d);
    problem.question = "<div>The ratio of " + x + " to " + y + " is " + a + " : " + b + ".<br>The ratio of " + y + " to " + z + " is " + c + " : " + d + ".</div>";
    problem.question += "<div>Find the ratio " + x + " : " + y + " : " + z + " in its simplest form.</div>";
    var hcf = HCF(HCF(a * c, b * c), b * d);
    problem.answer = a * c / hcf + " : " + b * c / hcf + " : " + b * d / hcf;
    return problem;
}

function simplifyingRatios(terms, maxPrime) {
    var problem = {};
    var simplifiedRatio = Array(terms);
    var ratio = new Array(terms);
    var multiplier = getRandom(2, maxPrime);
    for (var i = 0; i < ratio.length; i++) {
        simplifiedRatio[i] = getRandom(1, maxPrime);
        while (!isPrime(simplifiedRatio[i])) {
            simplifiedRatio[i] = getRandom(1, maxPrime);
        }
        ratio[i] = simplifiedRatio[i] * multiplier;
    }
    while (simplifiedRatio[0] === simplifiedRatio[1]) {
        simplifiedRatio[1] = getRandom(1, maxPrime);
        while (!isPrime(simplifiedRatio[1])) {
            simplifiedRatio[1] = getRandom(1, maxPrime);
        }
        ratio[1] = simplifiedRatio[1] * multiplier;
    }
    problem.question = "<div>Simplify fully</div><div>\\(";
    problem.answer = "<div>\\(";
    problem.typedAnswer = "";
    for (i = 0; i < ratio.length - 1; i++) {
        problem.question += ratio[i] + ":";
        problem.typedAnswer += simplifiedRatio[i] + ":";
        problem.answer += simplifiedRatio[i] + ":";
    }
    problem.question += ratio[i] + "\\)</div>";
    problem.typedAnswer += simplifiedRatio[i];
    problem.answer += simplifiedRatio[i] + "\\)</div>";
    return problem;
}


function basicProbability(type) {
    var problem = {};
    problem.question = "<div>";
    switch (type) {
    case 0:
        var side = "heads";
        if (Math.random() < 0.5) {
            side = "tails";
        }
        problem.question += "A fair coin is flipped. What is the probability of getting " + side + "?";
        problem.answer = "<sup>1</sup>&frasl;<sub>2</sub>";
        problem.typedAnswer = "1/2";
        break;
    case 1:
        problem.question += "A fair six sided dice is rolled. What is the probability of rolling a " + getRandom(1, 6) + "?";
        problem.answer = "<sup>1</sup>&frasl;<sub>6</sub>";
        problem.typedAnswer = "1/6";
        break;
    case 2:
        var sides = 2 * getRandom(2, 6);
        var number = getRandom(2, sides);
        var noun = "less";
        var outcomes = number - 1;
        if (Math.random() < 0.5) {
            noun = "more";
            outcomes = sides - number;
        }
        problem.question += "A fair " + sides + " sided spinner labelled 1 to " + sides + " is spun. What is the probability of spinning a number " + noun + " than " + number + "?";
        problem.answer = "<sup>" + outcomes + "</sup>&frasl;<sub>" + sides + "</sub>";
        problem.typedAnswer = outcomes + "/" + sides;
        break;
    case 3:
        switch (getRandom(0, 4)) {
        case 0:
            noun = "two heads";
            outcomes = 1;
            break;
        case 1:
            noun = "two tails";
            outcomes = 1;
            break;
        case 2:
            noun = "at least one heads";
            outcomes = 3;
            break;
        case 3:
            noun = "at least one tails";
            outcomes = 3;
            break;
        case 4:
            noun = "exactly one head and tails";
            outcomes = 2;
            break;
        }
        problem.question += "A fair coin is flipped twice. What is the probability of getting " + noun + "?";
        problem.answer = "<sup>" + outcomes + "</sup>&frasl;<sub>4</sub>";
        problem.typedAnswer = outcomes + "/4";
        break;
    }
    problem.question += "</div>";
    return problem;
}

function numberBonds(type, bond, x) {
    var problem = {};
    var data = "";
    switch (type) {
    case 0:
        data = x + " + ? = " + bond;
        break;
    case 1:
        data = "? + " + x + " = " + bond;
        break;
    case 2:
        data = bond + " &minus; " + " ? = " + x;
        break;
    case 3:
        data = bond + " &minus; " + x + " = ?";
        break;
    case 4:
        data = bond + " + " + x + "+? = " + 2 * bond;
        break;
    case 5:
        data = bond + " + " + "? + " + x + " = " + 2 * bond;
        break;
    case 6:
        data = 2 * bond + " - " + "? = " + bond + "+" + x;
        break;
    case 7:
        data = 2 * bond + " - " + x + " = " + bond + "+?";
        break;
    }
    problem.question = "\\(" + data + "\\)";
    problem.answer = "\\(" + roundError(bond - x) + "\\)";
    problem.typedAnswer = roundError(bond - x);
    return problem;
}

function twoStepEquations(type, x, y, answer, inequality) {
    var problem = {};
    var letter = "x";
    var side1, side2;
    var symbol = "=";
    if (inequality) {
        switch (getRandom(0, 3)) {
        case 0:
            symbol = "&lt;";
            break;
        case 1:
            symbol = "&le;";
            break;
        case 2:
            symbol = "&gt;";
            break;
        case 3:
            symbol = "&ge;";
            break;
        }
        if (type > 6) {
            type = getRandom(0, 6);
        }
    }
    switch (type) {
    case 0:
        side1 = x + letter + " + " + y;
        side2 = answer * x + y;
        break;
    case 1:
        side1 = x + letter + " - " + y;
        side2 = answer * x - y;
        break;
    case 2:
        side1 = y + " + " + x + letter;
        side2 = answer * x + y;
        break;
    case 3:
        side1 = "\\frac{" + letter + "}{" + x + "} + " + y;
        side2 = answer / x + y;
        break;
    case 4:
        side1 = "\\frac{" + letter + "}{" + x + "} - " + y;
        side2 = answer / x - y;
        break;
    case 5:
        side1 = y + " + \\frac{" + letter + "}{" + x + "}";
        side2 = answer / x + y;
        break;
    case 6:
        side1 = y + " - " + x + letter;
        side2 = -(answer * x - y);
        break;
    case 7:
        side1 = letter + "^" + x + " + " + y;
        side2 = Math.pow(answer, x) + y;
        break;
    case 8:
        side1 = letter + "^" + x + " - " + y;
        side2 = Math.pow(answer, x) - y;
        break;
    }
    side2 = roundError(side2);
    problem.question = "<div>Solve:</div><div>" + "\\(";
    if (Math.random() < 0.5 || inequality) {
        problem.question += side1 + " " + symbol + " " + side2;
    } else {
        problem.question += side2 + " " + symbol + " " + side1;
    }
    problem.question += "\\)</div>";
    answer = roundError(answer);
    if (!inequality) {
        problem.answer = "\\(" + letter + " " + symbol + " " + answer + "\\)";
        problem.typedAnswer = letter + symbol + answer;
    } else {
        problem.answer = "\\(" + answer + "\\)";
    }
    return problem;
}

function expectedFrequency(trials) {
    var problem = {};
    var number = getRandom(1, 6);
    problem.question = "<div>";
    problem.question += "A fair six sided dice is rolled " + trials + " times. How many times would you expect to roll a " + number + "?";
    problem.answer = Math.round(trials / 6);
    problem.question += "</div>";
    return problem;
}