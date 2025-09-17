function validIPAdress(queryIP) {
    if (queryIP.includes(".")) {
        let splittedIP = queryIP.split(".");
        if (splittedIP.length !== 4) {
            return "Neither";
        }
        for (let i = 0; i < splittedIP.length; i++) {
            let part = splittedIP[i];
            if (isNaN(part)) return "Neither";
            
            let numPart = parseInt(part);
            if (numPart < 0 || numPart > 255) {
                return "Neither";
            }
            if (part !== numPart.toString()) {
                return "Neither";
            }
        }
        return "Valid IPv4"; 
    } 
    
    else if (queryIP.includes(":")) {
        let splittedIP = queryIP.split(":");
        if (splittedIP.length !== 8) {
            return "Neither";
        }
        for (let i = 0; i < splittedIP.length; i++) {
            let part = splittedIP[i];
            if (part.length < 1 || part.length > 4) {
                return "Neither";
            }
            if (!/^[0-9a-fA-F]+$/.test(part)) {
                return "Neither";
            }
        }
        return "Valid IPv6"; 
    }
    return "Neither";
}

// Test cases
console.log(validIPAdress("172.16.254.1")); // Valid IPv4
console.log(validIPAdress("2001:0db8:85a3:0:0:8A2E:0370:7334")); // Valid IPv6
console.log(validIPAdress("256.256.256.256")); // Neither (invalid IPv4)
console.log(validIPAdress("172.16.256.1")); // Neither (invalid IPv4)
console.log(validIPAdress("192.168.01.1")); // Neither (invalid IPv4 - leading zeros)
console.log(validIPAdress("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // Valid IPv6
console.log(validIPAdress("2001:0db8:85a3::8A2E:037j:7334")); // Neither (invalid IPv6)
console.log(validIPAdress("02001:0db8:85a3:0000:0000:8a2e:0370:7334")); // Neither (invalid IPv6 - part too long)
