// // import styled from 'styled-components'

// // const Container = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// //   background-color: #f5f5f5;
// // `

// // const FormWrapper = styled.div`
// //   background: white;
// //   padding: 2rem;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   width: 100%;
// //   max-width: 400px;

// //   @media (max-width: 768px) {
// //     padding: 1.5rem;
// //   }

// //   @media (max-width: 480px) {
// //     padding: 1rem;
// //   }
// // `

// // const Title = styled.h2`
// //   margin-bottom: 1.5rem;
// //   text-align: center;
// //   color: #333;
// // `

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 0.75rem;
// //   margin-bottom: 1rem;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// //   font-size: 1rem;

// //   &:focus {
// //     border-color: #007bff;
// //     outline: none;
// //   }
// // `

// // const Button = styled.button`
// //   width: 100%;
// //   padding: 0.75rem;
// //   background-color: #007bff;
// //   color: white;
// //   border: none;
// //   border-radius: 4px;
// //   font-size: 1rem;
// //   cursor: pointer;
// //   transition: background-color 0.3s;

// //   &:hover {
// //     background-color: #0056b3;
// //   }
// // `

// // export { Button, Input, Title, FormWrapper, Container }

// import styled from 'styled-components'

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f5f5f5;
//   position: relative;
// `

// const FormWrapper = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 1rem;
//   }
// `

// const Title = styled.h2`
//   margin-bottom: 1.5rem;
//   text-align: center;
//   color: #333;
// `

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `

// const BackButton = styled.button`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   padding: 0.5rem 1rem;
//   background-color: #f5f5f5;
//   color: #007bff;
//   border: 2px solid #007bff;
//   border-radius: 4px;
//   font-size: 0.875rem;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `

// export { Button, Input, Title, FormWrapper, Container, BackButton }

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding: 20px;
`

const FormWrapper = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 10px 10px 45px rgba(0, 0, 0, 0.1), -10px -10px 45px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 20px 20px 55px rgba(0, 0, 0, 0.15), -20px -20px 55px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
`

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  margin-bottom: 1.25rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #2c3e50;
    outline: none;
    box-shadow: 0 0 10px #2c3e50;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background: #1a252f;
    box-shadow: 1px 3px 5px #34495e;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #2c3e50;
    color: white;
    box-shadow: 1px 3px 5px #34495e;
    border: 1px solid #2c3e50;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`

export { Button, Input, Title, FormWrapper, Container, BackButton }



