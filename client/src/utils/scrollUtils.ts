/**
 * Smoothly scrolls to the specified element ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};