function matchDates([arr]) {
    let pattern= /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;
    // let result = arr.match(pattern);
    // console.log(result.join(' '));
    let match = pattern.exec(arr);

    while (match != null){
        // console.log(match);
        let {day, month, year} = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        match = pattern.exec(arr);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);