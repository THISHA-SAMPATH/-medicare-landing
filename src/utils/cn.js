/**
 * A simple utility to merge and override Tailwind utility classes.
 * It ensures classes of the same prefix (like bg-, text-, px-, py-) override earlier ones.
 */
export function cn(...classes) {
  const merged = {};
  classes.filter(Boolean).forEach(c => {
    c.split(/\s+/).forEach(className => {
      if (!className) return;
      
      // Determine the category key of the class
      let key = className;
      
      if (className.startsWith('hover:bg-')) key = 'hover:bg';
      else if (className.startsWith('hover:text-')) key = 'hover:text';
      else if (className.startsWith('bg-')) key = 'bg';
      else if (className.startsWith('text-')) {
        if (className.match(/^text-(left|center|right|justify|start|end)$/)) {
          key = 'text-align';
        } else if (className.match(/^text-(xs|sm|base|lg|xl|\d+xl)$/) || className.startsWith('text-[')) {
          key = 'text-size';
        } else {
          key = 'text-color';
        }
      }
      else if (className.startsWith('px-')) key = 'px';
      else if (className.startsWith('py-')) key = 'py';
      else if (className.startsWith('p-')) key = 'p';
      else if (className.startsWith('rounded-')) key = 'rounded';
      else if (className.startsWith('shadow-')) key = 'shadow';
      else if (className.startsWith('border-')) key = 'border';
      else if (className.startsWith('font-')) key = 'font';
      else if (className.startsWith('w-')) key = 'width';
      else if (className.startsWith('h-')) key = 'height';
      
      merged[key] = className;
    });
  });
  return Object.values(merged).join(' ');
}
