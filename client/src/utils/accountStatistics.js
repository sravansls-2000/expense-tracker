//total, min, max, avg
const calcTransaction = arr => {
    const tranArr = arr?.map(data => data?.amount);
    const sumTotal = arr
      ?.map(data => data?.amount)
      .reduce((acc, curr) => {
        return Number(acc) + Number(curr);
      }, 0);
    return {
      sumTotal
    };
  };
  
  export default calcTransaction;