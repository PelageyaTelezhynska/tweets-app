import styled from "@emotion/styled";


export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
}
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    min-height: 100px;
    padding: 20px;
    background: linear-gradient(114.99deg, rgba(71,28,169) -0.99%, rgba(87,54,163) 54.28%, rgba(75,42,153) 78.99%);
    border-radius: 20px;

    @media screen and (min-width: 1280px) {
        width: 500px;

}
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
    text-transform: uppercase;
    color: #EBD8FF;
`

export const Subtitle = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.22;
    text-align: center;
    color: #EBD8FF;
`

export const Description = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.22;
    text-align: center;
    color: #D8BFD8;
`

export const HeroImg = styled.img`
    margin-top: 32px;
    width: 387.5px;
    height: 250px;

@media screen and (min-width: 1280px) {
    margin: 0;
    width: 518px;
    height: 334px;
}
    
`