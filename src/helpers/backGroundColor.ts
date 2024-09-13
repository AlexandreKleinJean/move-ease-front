const getBackgroundColor = (genre: string): string => {
    switch (genre) {
        case 'Thriller':
            return '#FF6347';
        case 'Action':
            return '#8B4513';
        case 'Animation':
            return '#87CEEB';
        case 'Romantic Comedy':
            return '#FFC0CB';
        case 'Science Fiction':
            return '#FFC0CB';
        default:
            return '#FFF';
    }
}

export default getBackgroundColor;