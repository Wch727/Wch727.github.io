export function formatDateToYYYYMMDD(date: Date): string {
	const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
	const value = (type: string) => parts.find(part => part.type === type)?.value;
	return `${value('year')}-${value('month')}-${value('day')}`;
}

export function formatDateLabel(date: Date, precision: 'day' | 'month' = 'day'): string {
	const value = formatDateToYYYYMMDD(date);
	return precision === 'month' ? `${value.slice(0,4)}.${Number(value.slice(5,7))}` : value;
}
