import React, { useState } from 'react';

const timezones = [
    'UTC+14:00 Line Islands',
    'UTC+13:00 Samoa Time',
    'UTC+12:00 New Zealand Standard Time',
    'UTC+11:00 Fiji Time',
    'UTC+10:00 Australian Eastern Standard Time',
    'UTC+9:30 Australian Central Standard Time',
    'UTC+9:00 Japan Standard Time',
    'UTC+8:00 China Standard Time',
    'UTC+7:00 Indochina Time',
    'UTC+6:30 Myanmar Standard Time',
    'UTC+6:00 Bangladesh Standard Time',
    'UTC+5:45 Nepal Time',
    'UTC+5:30 Indian Standard Time',
    'UTC+5:00 Pakistan Standard Time',
    'UTC+4:30 Afghanistan Time',
    'UTC+4:00 Gulf Standard Time',
    'UTC+3:30 Iran Standard Time',
    'UTC+3:00 Eastern European Standard Time',
    'UTC+2:00 Central European Standard Time',
    'UTC+1:00 Western European Standard Time',
    'UTC+0:00 Coordinated Universal Time (UTC)',
    'UTC-1:00 Cape Verde Time',
    'UTC-2:00 Fernando de Noronha Time',
    'UTC-3:00 Greenland Standard Time',
    'UTC-3:30 Newfoundland Standard Time',
    'UTC-4:00 Atlantic Standard Time',
    'UTC-4:30 Venezuela Time',
    'UTC-5:00 Eastern Standard Time (EST)',
    'UTC-6:00 Central Standard Time (CST)',
    'UTC-7:00 Mountain Standard Time (MST)',
    'UTC-8:00 Pacific Standard Time (PST)',
    'UTC-9:00 Alaska Standard Time (AKST)',
    'UTC-10:00 Hawaii-Aleutian Standard Time (HAST)'
];

const TimezonePicker: React.FC = () => {
    const defaultTimezone = 'UTC+10:00 Australian Eastern Standard Time';
    const [selectedTimezone, setSelectedTimezone] = useState<string>(defaultTimezone);

    return (
        <div>
            <label htmlFor="timezone">Select a timezone:</label>
            <select
                id="timezone"
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="select select-bordered w-full max-w-xs"
            >
                {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                        {tz}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimezonePicker;
