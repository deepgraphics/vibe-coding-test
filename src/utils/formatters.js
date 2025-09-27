// Utility functions for formatting data
// These are helper functions you can use throughout your app

/**
 * Format a date into a readable string
 * Example: formatDate(new Date()) returns "January 15, 2024"
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

/**
 * Format a number as currency
 * Example: formatCurrency(1234.56) returns "$1,234.56"
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

/**
 * Capitalize the first letter of a string
 * Example: capitalize('hello world') returns "Hello world"
 */
export const capitalize = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};