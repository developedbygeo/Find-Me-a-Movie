import { keyframes } from 'styled-components';

export const loadingFolding = keyframes`

0%, 10%{
    transform: perspective(10rem) rotateX(-180deg); 
    opacity: 0;
}
25%, 75%{
    transform: perspective(10rem) rotateX(0deg); 
    opacity: 1;
}
90%, 100%{
    tranform: perspective(12rem) rotateY(180deg);
    opacity: 0;
}
`;
