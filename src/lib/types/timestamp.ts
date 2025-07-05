export interface TimestampState {
	timestamp: number;
	date: string;
	timezone: string;
}

export interface DurationState {
	days: number;
	hours: number;
	minutes: number;
}

export type DurationField = 'days' | 'hours' | 'minutes';

export interface TimestampInputProps {
	value: number;
	timezone: string;
	oninput: (value: number) => void;
}

export interface DateInputProps {
	value: string;
	oninput: (value: string) => void;
}

export interface DurationInputProps {
	days: number;
	hours: number;
	minutes: number;
	onChange: (field: DurationField, value: number) => void;
}

export interface TimestampCardProps {
	title: string;
	timestamp: number;
	date: string;
	timezone: string;
	onTimestampChange: (value: number) => void;
	onDateChange: (value: string) => void;
}

export interface ActionButtonGroupProps {
	onReset: () => void;
	onSwitch: () => void;
	onResetAll: () => void;
}

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'danger';
	disabled?: boolean;
	onclick?: () => void;
}

export interface InputProps {
	type?: 'text' | 'number' | 'datetime-local';
	value?: string | number;
	placeholder?: string;
	disabled?: boolean;
	id?: string;
	oninput?: (event: Event) => void;
}

export interface LabelProps {
	for?: string;
	text: string;
}