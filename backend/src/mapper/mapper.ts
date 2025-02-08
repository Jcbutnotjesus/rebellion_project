const removeEmptyArrays = (obj: Record<string, any>): Record<string, any> =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      if (Array.isArray(value) && value.length === 0) {
        return acc; 
      }
      if (value === "N/A") {
        return acc;
      }
      return { ...acc, [key]: value }; 
    }, {});
  
  export const mapEntity = (entity: any): any => {
    const { created, edited, url, ...rest } = entity; 
    return removeEmptyArrays(rest); 
  };