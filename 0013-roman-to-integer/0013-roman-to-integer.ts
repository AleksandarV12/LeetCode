function romanToInt(s: string): number {
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;
    const IV = 4;
    const IX = 9;
    const XL = 40;
    const XC = 90;
    const CD = 400;
    const CM = 900;
    let counter = 0;
    for (let i = 0; i < s.length; i++){
        if(s[i] == "I" && i != s.length - 1){
            if(s[i+1] == "V"){
                counter +=4;
                i++;
                continue;
            }
            if(s[i+1] == "X"){
                counter +=9;
                i++;
                continue;
            }
            counter += 1;
            continue;
        }
        if(s[i] == "X" && i != s.length - 1){
            if(s[i+1] == "L"){
                counter +=40;
                i++;
                continue;
            }
            if(s[i+1] == "C"){
                counter +=90;
                i++;
                continue;
            }
            counter += 10;
            continue;
        }
        if(s[i] == "C" && i != s.length - 1){
            if(s[i+1] == "D"){
                counter +=400;
                i++;
                continue;
            }
            if(s[i+1] == "M"){
                counter +=900;
                i++;
                continue;
            }
            counter += 100;
            continue;
        }
        if(i == s.length - 1){
            if(s[i] == "I"){
                counter +=1;
                continue;
            }
            if(s[i] == "V"){
                counter +=5;
                continue;
            }
            if(s[i] == "X"){
                counter +=10;
                continue;
            }
            if(s[i] == "L"){
                counter +=50;
                continue;
            }
            if(s[i] == "C"){
                counter +=100;
                continue;
            }
            if(s[i] == "D"){
                counter +=500;
                continue;
            }
            if(s[i] == "M"){
                counter +=1000;
                continue;
            }
        }
        if(s[i] == "V"){
            counter +=5;
            continue;
        }
        if(s[i] == "L"){
            counter +=50;
            continue;
        }
        if(s[i] == "D"){
            counter +=500;
            continue;
        }
        if(s[i] == "M"){
            counter +=1000;
            continue;
        }
    }
    return counter;
    
};