import {validation} from './validation';

export const callAPI = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const {cardNumber, expirationDate, cvv, firstName, lastName} = data;
      const result = validation(
        cardNumber,
        expirationDate,
        cvv,
        firstName,
        lastName,
      );
      if (result.resultValid) {
        resolve({data, result});
      }
      reject({data, result});
    }, 2000);
  });
};

// export default callAPI;
