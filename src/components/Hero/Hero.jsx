import { HeroImg, HeroWrapper, Description, Subtitle, TextWrapper, Title } from "./Hero.styled"
import hero_bg from '../../images/hero-bg.png';

export const Hero = () => {
    return(
        <HeroWrapper>
            <TextWrapper>
                <Subtitle>Your app for following the best</Subtitle>
                <Title>Follow your dreams on TweetsApp</Title>
                <Description>TweetsApp is a free social networking site where users broadcast short posts known as tweets.</Description>
            </TextWrapper>
            <HeroImg src={hero_bg} alt='hero image'/>
        </HeroWrapper>
    )
}