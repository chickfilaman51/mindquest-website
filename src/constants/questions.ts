type Problem = {
    question: string;
    answer: any;
    typedAnswer?: any;
};

export function getRandom(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isPrime(n:number) {
    var isPrime = true;
    if (n < 2) {
        isPrime = false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if ((n % i) == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

export function letterPicker(n:number, capitalLetter:string) {
    var capital = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','T','U','V','W','X','Y','Z');
    var lowercase = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z');
    if (n < 0) {
        n = getRandom(0, capital.length - 1);
    }
    if (n >= capital.length) {
        n %= capital.length;
    }
    if (capitalLetter) {
        return capital[n];
    } else {
        return lowercase[n];
    }
}

export function ordinal(n:number) {
    var x = "";
    if (n % 10 == 1 && n != 11) {
        x += "st";
    } else if (n % 10 == 2 && n != 12) {
        x += "nd";
    } else if (n % 10 == 3 && n != 13) {
        x += "rd";
    } else {
        x += "th";
    }
    return x;
}
export function toss() {
    if (Math.random() < 0.5) {
        return true;
    } else {
        return false;
    }
}

export function HCF(x: number, y:number) {
    var temp;
    if (x < 0) {
        x *= -1;
    }
    if (y < 0) {
        y *= -1;
    }
    if (x == y) {
        return x;
    }
    while (x != 0) {
        y = y % x;
        temp = x;
        x = y;
        y = temp;
    }
    return y;
}

export function roundError(answer:number) {
    return Math.round(answer * 1000000000) / 1000000000;
}
export function addSub(x: number, y:number, type: string) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    problem.question = "";
    switch (type) {
    case "+":
        problem.question += x + " + " + y;
        problem.answer = x + y;
        break;
    case "-":
        problem.question += x + " - " + y;
        problem.answer = x - y;
        break;
    }
    problem.question += "";
    problem.typedAnswer = roundError(problem.answer);
    problem.answer = roundError(problem.answer);
    return problem;
}


export function ordering(length: number, decimal: boolean, negative: boolean, descending: boolean, range: any) {
    var list = new Array(length);
    var problem: Problem = {
        question: "",
        answer: null
    };
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
    problem.question = "Write in ";
    if (descending) {
        problem.question += "descending";
    } else {
        problem.question += "ascending";
    }
    problem.question += " order: ";
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
    problem.question += "";
    problem.answer = list.join(',');
    return problem;
}

export function multDiv(x: number, y:number, type: string) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    problem.question = "";
    switch (type) {
    case "*":
        problem.question += x + " x " + y;
        problem.answer = x * y;
        break;
    case "/":
        problem.question += x + " / " + y;
        problem.answer = x / y;
        break;
    }
    problem.question += "";
    problem.typedAnswer = roundError(problem.answer);
    problem.answer = roundError(problem.answer);
    return problem;
}


export function convertingMetricLength(m: number, from: string | number, to: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var unit = new Array("mm","cm","m","km");
    var cm = roundError(m * 100);
    var mm = roundError(cm * 10);
    var km = roundError(m / 1000);
    var value = new Array(mm,cm,m,km);
    problem.question = "Convert " + value[from as number] + " " + unit[from as number] + " to " + unit[to as number];
    switch (to as number) {
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
    problem.answer += " " + unit[Number(to)];
    return problem;
}

export function convertingMetricWeight(kg: number, from: string | number, to: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var unit = new Array("mg","g","kg","tonnes");
    var g = roundError(kg * 1000);
    var mg = roundError(g * 1000);
    var tonnes = roundError(kg / 1000);
    var value = new Array(mg,g,kg,tonnes);
    problem.question = "Convert " + value[from as number] + " " + unit[from as number] + " to " + unit[to as number];
    switch (to as number) {
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
    problem.answer += " " + unit[Number(to)];
    return problem;
}

export function convertingMetricVolume(l: number, from: string | number, to: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var unit = new Array("ml","cl","l");
    var cl = roundError(l * 100);
    var ml = roundError(cl * 10);
    var value = new Array(ml,cl,l);
    problem.question = "Convert " + value[from as number] + " " + unit[from as number] + " to " + unit[to as number];
    switch (to as number) {
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
    problem.answer += " " + unit[to as number];
    return problem;
}

export function polygonSides(maxPol: number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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
    let temp: number;
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
    problem.question = "How many sides does " + polygon[temp].name + " have?";
    problem.answer = polygon[temp].sides;
    return problem;
}

export function convertingTime(from: number, to: number, x: number | number) {
    var units = ["seconds", "minutes", "hours", "days", "weeks"];
    var mutliplier = [1, 60, 60, 24, 7];
    var problem: Problem = {
        question: "",
        answer: null
    };
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

export function equationsIfThen(type: any, a: string | number, b: string | number, rhs: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var letter = "x";
    var e1 = "";
    var e2 = "";
    var ans = 0;
    switch (type) {
    case 0:
        e1 = a + letter + "=" + rhs;
        e2 = a + letter + "+" + b;
        ans = Number(rhs) + Number(b);
        break;
    case 1:
        e1 = a + letter + "=" + rhs;
        e2 = a + letter + "-" + b;
        ans = Number(rhs) - Number(b);
        break;
    case 2:
        var mults = [2, 10];
        var m = mults[getRandom(0, mults.length - 1)];
        e1 = a + letter + "=" + rhs;
        e2 = (m * Number(a)) + letter;
        var ans = Number(rhs) * m;
        break;
    case 3:
        e1 = a + letter + "=" + rhs;
        e2 = Number(a) / 2 + letter;
        ans = Number(rhs) / 2;
        break;
    case 4:
        e1 = a + letter + "=" + rhs;
        e2 = a + "(" + letter + "+" + 1 + ")";
        ans = Number(rhs) + Number(a);
        break;
    case 5:
        e1 = a + letter + "=" + rhs;
        e2 = a + "(" + letter + "-" + 1 + ")";
        ans = Number(rhs) - Number(a);
        break;
    case 6:
        e1 = a + letter + "=" + rhs;
        e2 = -a + letter + "+" + b;
        ans = -Number(rhs) + Number(b);
        break;
    case 7:
        e1 = a + letter + "=" + rhs;
        e2 = -a + letter + "-" + b;
        ans = -rhs - Number(b);
        break;
    case 8:
        e1 = a + letter + "=" + rhs;
        e2 = -a + "(" + letter + "+" + 1 + ")";
        ans = -rhs - Number(a);
        break;
    case 9:
        e1 = a + letter + "=" + rhs;
        e2 = -a + "(" + letter + "-" + 1 + ")";
        ans = -Number(rhs) + Number(a);
        break;
    }
    var answer = e2 + "=" + ans;
    e2 += "=\\text{ }?";
    problem.question = "<div>If \\(" + e1 + "\\),</div>";
    problem.question += "<div>then \\(" + e2 + "\\)</div>";
    problem.answer = "\\(" + answer + "\\)";
    return problem;
}

export function fourOpsFractions(w1: string | number, n1: string | number, d1: string | number, w2: string | number, n2: string | number, d2: string | number, w3: string | number, n3: string | number, d3: string | number, o1: string, o2: string) {
    var problem: Problem = {
        question: "",
        answer: null
    };

    w1 = w1 === 0 ? "" : Number(w1);
    w2 = w2 === 0 ? "" : Number(w2);
    w3 = w3 === 0 ? "" : Number(w3);


    var f1 = w1 + "\\frac{" + n1 + "}{" + d1 + "}";
    var f2 = w2 + "\\frac{" + n2 + "}{" + d2 + "}";
    var f3 = w3 + "\\frac{" + n3 + "}{" + d3 + "}";
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    d1 = Number(d1);
    w1 = Number(w1);
    d1 = Number(d1);
    w2 = Number(w2);
    d2 = Number(d2);
    w3 = Number(w3);
    d3 = Number(d3);
    n1 = w1 * d1 + Number(n1);
    n2 = w2 * d2 + Number(n2);
    n3 = w3 * d3 + Number(n3);
    var num: number = 0, den: number = 0;

    if (o1 == "+") {
        num = n1 * d2 + n2 * d1;
        den = d1 * d2;
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

export function areaCircle(r: string | number, pi: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var unit = "cm";
    if (toss()) {
        unit = "mm";
    }
    if (toss()) {
        unit = "m";
    }
    var area = "\\(";
    if (pi) {
        area += Number(r) * Number(r) + "&pi;";
    } else {
        area += Math.round(10 * Number(r) * Number(r) * Math.PI) / 10;
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



export function factors(maxFactors: number, minNumber: any, maxNumber: number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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
    var answer = ""; // Initialize the 'answer' variable
    var x = 0; // Assign a default value to 'x'
    problem.question = "<div>List all the factors of \\(" + x + "\\).</div>";
    problem.answer = "<div>\\(" + answer + "\\)</div>";
    problem.typedAnswer = answer;
    return problem;
}

export function multiples(multiple: string | number, x: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    problem.question = "<div>Write down the \\(" + Number(multiple) + "\\)<sup>" + ordinal(Number(multiple)) + "</sup> multiple of \\(" + Number(x) + "\\).</div>";
    problem.answer = Number(x) * Number(multiple);
    return problem;
}

export function hcf(x: string, y: string, z: string) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    if (z) {
        problem.question = "Find the highest common factor of " + x + ", " + y + " and " + z + ".";
        problem.answer = HCF(HCF(Number(x), Number(y)), Number(z));
    } else {
        problem.question = "Find the highest common factor of " + x + " and " + y + ".";
        problem.answer = HCF(Number(x), Number(y));
    }
    return problem;
}

export function lcm(x: string | number, y: string | number, z: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    if (z) {
        var temp = Number(x) * Number(y) / (HCF(Number(x), Number(y)));
        problem.question = "Find the lowest common multiple of " + x + ", " + y + " and " + z + ".";
        problem.answer = temp * Number(z) / HCF(temp, Number(z));
    } else {
        problem.question = "Find the lowest common multiple of " + x + " and " + y + ".";
        problem.answer = Number(x) * Number(y) / (HCF(Number(x), Number(y)));
    }
    return problem;
}

export function collectingTerms(letters: string | any[], variables: any[], coeff: string | any[], mixed: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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

export function convertFDP(type: any, num: string | number, den: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var decimal = "\\(" + roundError(Number(num) / Number(den)) + "\\)";
    var percentage = "\\(" + roundError(Number(num) / Number(den) * 100) + "\\)";
    num = roundError(Number(num));
    den = roundError(Number(den));
    var whole = Math.floor(Number(num) / Number(den));
    if (whole < 0) {
        whole++;
        if (whole != 0) {
            num = Math.abs(Number(num));
        }
    }
    num = Number(num) % Number(den);
    var hcf = HCF(Number(num), Number(den));
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

export function circumferenceCircle(r: string | number, pi: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var unit = "cm";
    if (toss()) {
        unit = "mm";
    }
    if (toss()) {
        unit = "m";
    }
    var circumference = "\\(";
    if (pi) {
        circumference += 2 * Number(r) + "&pi;";
    } else {
        circumference += Math.round(10 * 2 * Number(r) * Math.PI) / 10;
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

export function combiningRatios(max: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var seed = getRandom(0, 30);
    var x = letterPicker(seed, "capitalLetter");
    var y = letterPicker(seed + 1, "capitalLetter");
    var z = letterPicker(seed + 2, "capitalLetter");
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

export function simplifyingRatios(terms: any, maxPrime: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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


export function basicProbability(type: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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
        var outcomes: number = 0;
        var noun = ""; // Assign a default value to 'noun'
        problem.question += "A fair coin is flipped twice. What is the probability of getting " + noun + "?";
        problem.answer = "<sup>" + outcomes + "</sup>&frasl;<sub>4</sub>";
        problem.typedAnswer = outcomes + "/4";
        break;
    }
    problem.question += "</div>";
    return problem;
}

export function numberBonds(type: any, bond: string | number, x: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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
        data = bond + " + " + x + "+? = " + 2 * Number(bond);
        break;
    case 5:
        data = bond + " + " + "? + " + x + " = " + 2 * Number(bond);
        break;
    case 6:
        data = 2 * Number(bond) + " - " + "? = " + bond + "+" + x;
        break;
    case 7:
        data = 2 * Number(bond) + " - " + x + " = " + bond + "+?";
        break;
    }
    problem.question = "\\(" + data + "\\)";
    problem.answer = "\\(" + roundError(Number(bond) - Number(x)) + "\\)";
    problem.typedAnswer = roundError(Number(bond) - Number(x));
    return problem;
}

export function twoStepEquations(type: number, x: string | number, y: string | number, answer: string | number, inequality: any) {
    var problem: Problem = {
        question: "",
        answer: null
    };
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
        side2 = Number(answer) * Number(x) + Number(y);
        break;
    case 1:
        side1 = x + letter + " - " + y;
        side2 = Number(answer) * Number(x) - Number(y);
        break;
    case 2:
        side1 = y + " + " + x + letter;
        side2 = Number(answer) * Number(x) + Number(y)
        break;
    case 3:
        side1 = "\\frac{" + letter + "}{" + x + "} + " + y;
        side2 = Number(answer) / Number(x) - Number(y);
        break;
    case 4:
        side1 = "\\frac{" + letter + "}{" + x + "} - " + y;
        side2 = Number(answer) / Number(x) - Number(y)
        break;
    case 5:
        side1 = y + " + \\frac{" + letter + "}{" + x + "}";
        side2 = Number(answer) * Number(x) + Number(y)
        break;
    case 6:
        side1 = y + " - " + x + letter;
        side2 = -(Number(answer) * Number(x) - Number(y));
        break;
    case 7:
        side1 = letter + "^" + x + " + " + y;
        side2 = Math.pow(Number(answer), Number(x)) + Number(y);
        break;
    case 8:
        side1 = letter + "^" + x + " - " + y;
        side2 = Math.pow(Number(answer), Number(x)) - Number(y);
        break;
    }
    side2 = roundError(Number(side2));
    problem.question = "<div>Solve:</div><div>" + "\\(";
    if (Math.random() < 0.5 || inequality) {
        problem.question += side1 + " " + symbol + " " + side2;
    } else {
        problem.question += side2 + " " + symbol + " " + side1;
    }
    problem.question += "\\)</div>";
    answer = roundError(Number(answer));
    if (!inequality) {
        problem.answer = "\\(" + letter + " " + symbol + " " + answer + "\\)";
        problem.typedAnswer = letter + symbol + answer;
    } else {
        problem.answer = "\\(" + answer + "\\)";
    }
    return problem;
}

export function expectedFrequency(trials: string | number) {
    var problem: Problem = {
        question: "",
        answer: null
    };
    var number = getRandom(1, 6);
    problem.question = "<div>";
    problem.question += "A fair six sided dice is rolled " + trials + " times. How many times would you expect to roll a " + number + "?";
    problem.answer = Math.round(Number(trials) / 6);
    problem.question += "</div>";
    return problem;
}

