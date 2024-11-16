function randFortuneMsg() {
    const beginnings = [
        "As the sun rises",
        "In your journey",
        "When the moon is full",
        "The wise sage says",
        "Your destiny shows",
        "Fortune favors you",
        "The stars whisper",
        "Ancient wisdom reveals",
        "Your path ahead",
        "The universe knows"
    ];
    
    const middleParts = [
        "a golden opportunity",
        "an unexpected friendship",
        "a moment of clarity",
        "your inner strength",
        "a valuable lesson",
        "your true potential",
        "a fortunate encounter",
        "your hidden talent",
        "a new beginning",
        "your patient heart"
    ];
    
    const endings = [
        "will bring great joy.",
        "shall lead to success.",
        "brings unexpected riches.",
        "opens many door.",
        "changes everything.",
        "rewards your patience.",
        "fulfills your dreams.",
        "guides your future.",
        "makes others smile.",
        "brings good fortune."
    ];

    // Get random elements from each array
    const randBeginning = beginnings[Math.floor(Math.random() * beginnings.length)]; // Fixed array reference
    const randMiddle = middleParts[Math.floor(Math.random() * middleParts.length)]; 
    const randEnd = endings[Math.floor(Math.random() * endings.length)]; 

    // Combine the parts with spaces between them
    return `${randBeginning} ${randMiddle} ${randEnd}`;
}

// Call the function properly
console.log(randFortuneMsg());