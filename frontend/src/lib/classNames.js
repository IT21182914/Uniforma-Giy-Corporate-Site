/**
 * Utility function to combine CSS classes conditionally
 * @param {...(string|boolean|undefined|null)} classes 
 * @returns {string}
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility function to combine classes with conditional logic
 * @param {string} base - Base classes
 * @param {Object} conditionalClasses - Object with condition as key and classes as value
 * @returns {string}
 */
export function cn(base, conditionalClasses = {}) {
  const classes = [base];
  
  Object.entries(conditionalClasses).forEach(([condition, className]) => {
    if (condition && className) {
      classes.push(className);
    }
  });
  
  return classes.filter(Boolean).join(' ');
}
