import { useState, useEffect } from 'react';

export function FormatDate(date_str) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (date_str) {
      // Split the date and time parts
      const [datePart, timePart] = date_str.split(' ');

      // Extract the day, month, and year
      const [day, month, year] = datePart.split('-');

      // Create a new Date object
      const dateObj = new Date(`${year}-${month}-${day}T${timePart}`);

      // Define an array to map month numbers to month names
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
      ];

      // Format the date into "Day Month Year, Hour:Minute"
      const formatted = `${parseInt(day)} ${monthNames[parseInt(month) - 1]} ${year}, ${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, '0')}`;

      // Update the formatted date in state
      setFormattedDate(formatted);
    }
  }, [date_str]); // Re-run the effect whenever date_str changes

  return formattedDate;
}


