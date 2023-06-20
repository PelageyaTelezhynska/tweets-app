import styled from "@emotion/styled";
import bg_1x from '../../images/bg@1x.png';

export const StyledLi = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`

export const LogoWrapper = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
`

export const BackgroundImage = styled.div`
    width: 380px;
    height: 214px;
    background-image: url(${bg_1x});
    background-repeat: no-repeat;
    background-position: center;
    backgroun-size: contain;
`

export const Line = styled.hr`
    margin: 0;
    width: 380px;
    height: 8px;
    
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`

export const AvatarWrapper = styled.div`
    position: absolute;
    top: 178px;
    z-index: 1;
`

export const UserAvatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    position: absolute;
    top: 187px;
`

export const InfoWrapper = styled.div`
    margin-top: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

`

export const UserInfo = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #EBD8FF;
`

export const FollowBtn = styled.button`
    margin-top: 26px;
    width: 196px;
    height: 50px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    border-radius: 10.3108px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer;
    transition: all 0.4s ease;



    &.active {
        background-color: #5CD3A8;
        &:hover {
        color: #EBD8FF;
        background-color:rgb(93, 63, 211);
        }
    }
    &:hover {
        color: #EBD8FF;
        background-color:rgb(93, 63, 211);
    }
`





