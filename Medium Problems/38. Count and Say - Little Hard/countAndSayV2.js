const countAndSay = f = (n, s = '1') => 
    n > 1 ? f(n - 1, s.replace(/(.)\1*/g, x => x.length + x[0])) : s;