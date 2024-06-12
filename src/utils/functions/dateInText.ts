export default function showDateInText(dateObject: Date | null): string {
    let date: Date;
    if (dateObject !== null) {
        date = new Date(dateObject);
    } else {
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');
        date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    }
    const monthNames = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ];

    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    const day = date.getDate();

    const dateInText = `${day} ${monthName}`;
    return dateInText;
}
