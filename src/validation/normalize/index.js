export const mobile = (value) => value.replace(/[^\d]/g, '').slice(0, 10);


export const idNumber = (value) => value.replace(/[^\d]/g, '').slice(0, 13);

// export const email  = (value) => value.replace(/[^\d]/g, '');

export const captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);

export const upper = (value) => value && value.toUpperCase();

export const voting_station = (value) => value.replace(/[^\d]/g, '').slice(0, 3);


